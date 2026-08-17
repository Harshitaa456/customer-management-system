const VALID_STATUSES = ["Active", "Pending", "Inactive"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateCustomerInput(data, { isUpdate = false } = {}) {
  const errors = [];
  const sanitized = {};

  if (data.name !== undefined || !isUpdate) {
    const name = typeof data.name === "string" ? data.name.trim() : "";

    if (!name) {
      errors.push("Name is required");
    } else if (name.length < 2) {
      errors.push("Name must be at least 2 characters");
    } else {
      sanitized.name = name;
    }
  }

  if (data.email !== undefined || !isUpdate) {
    const email = typeof data.email === "string" ? data.email.trim() : "";

    if (!email) {
      errors.push("Email is required");
    } else if (!EMAIL_REGEX.test(email)) {
      errors.push("Please enter a valid email address");
    } else {
      sanitized.email = email.toLowerCase();
    }
  }

  if (data.phone !== undefined) {
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";

    if (!phone) {
      sanitized.phone = null;
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length !== 10) {
        errors.push("Phone number must be exactly 10 digits");
      } else {
        sanitized.phone = digitsOnly;
      }
    }
  }

  if (data.company !== undefined) {
    sanitized.company = typeof data.company === "string" ? data.company.trim() || null : null;
  }

  if (data.status !== undefined || !isUpdate) {
    const status = data.status || "Active";

    if (!VALID_STATUSES.includes(status)) {
      errors.push("Status must be Active, Pending, or Inactive");
    } else {
      sanitized.status = status;
    }
  }

  return { errors, sanitized };
}

module.exports = {
  VALID_STATUSES,
  validateCustomerInput,
};
