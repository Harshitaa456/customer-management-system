import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div
    className="min-h-screen flex flex-col"
    style={{
      backgroundImage: "url('/aventra-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
      <Navbar />

      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About Aventra
            </h1>

            <p className="text-xl text-muted-foreground">
              Building the future of customer relationship management
            </p>
          </div>

          {/* Our Mission */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              At Aventra, we believe that every customer relationship matters.
              Our mission is to provide businesses with powerful, intuitive
              tools to manage customer relationships effectively. We're
              committed to helping businesses of all sizes build stronger
              connections with their customers.
            </p>
          </div>

          {/* Our Values */}
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Customer First
                </h3>

                <p className="text-muted-foreground text-sm">
                  Everything we do is with our customers in mind.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Innovation
                </h3>

                <p className="text-muted-foreground text-sm">
                  Constantly improving and pushing boundaries.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Transparency
                </h3>

                <p className="text-muted-foreground text-sm">
                  Open, honest, and always accountable.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;