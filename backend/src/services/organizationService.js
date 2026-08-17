const { normalizeName } = require("../utils/normalizeName");

const DEFAULT_USER_ID = 1;

async function findOrCreateOrganization(tx, organizationName, userId = DEFAULT_USER_ID) {
  const trimmedName = organizationName.trim();
  const normalizedName = normalizeName(trimmedName);

  let organization = await tx.organization.findUnique({
    where: {
      userId_normalizedName: {
        userId,
        normalizedName,
      },
    },
  });

  if (!organization) {
    try {
      organization = await tx.organization.create({
        data: {
          name: trimmedName,
          normalizedName,
          userId,
        },
      });
    } catch (error) {
      if (error.code === "P2002") {
        organization = await tx.organization.findUnique({
          where: {
            userId_normalizedName: {
              userId,
              normalizedName,
            },
          },
        });
      } else {
        throw error;
      }
    }
  }

  return organization;
}

async function findOrCreateBranch(tx, organizationId, branchName) {
  const trimmedName = branchName.trim();
  const normalizedName = normalizeName(trimmedName);

  let branch = await tx.branch.findUnique({
    where: {
      organizationId_normalizedName: {
        organizationId,
        normalizedName,
      },
    },
  });

  if (!branch) {
    try {
      branch = await tx.branch.create({
        data: {
          name: trimmedName,
          normalizedName,
          organizationId,
        },
      });
    } catch (error) {
      if (error.code === "P2002") {
        branch = await tx.branch.findUnique({
          where: {
            organizationId_normalizedName: {
              organizationId,
              normalizedName,
            },
          },
        });
      } else {
        throw error;
      }
    }
  }

  return branch;
}

async function resolveOrganizationAndBranch(
  prisma,
  organizationName,
  branchName,
  userId = DEFAULT_USER_ID
) {
  return prisma.$transaction(async (tx) => {
    const organization = await findOrCreateOrganization(tx, organizationName, userId);
    const branch = await findOrCreateBranch(tx, organization.id, branchName);

    return { organization, branch };
  });
}

module.exports = {
  DEFAULT_USER_ID,
  findOrCreateOrganization,
  findOrCreateBranch,
  resolveOrganizationAndBranch,
};
