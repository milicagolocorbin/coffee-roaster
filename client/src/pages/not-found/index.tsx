import Layout from "../../components/layout/Layout";
import ButtonPrimary from "../../components/common/buttons/ButtonPrimary";

// MARKUP
const NotFound = () => {
  return (
    <Layout>
      <section>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <div className="max-w-md text-center">
            <h1 className="mb-8 font-extrabold text-9xl">404</h1>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 font-semibold">
              But do not worry, you can find plenty of other things on our
              homepage.
            </p>
            <ButtonPrimary route="/">Back to home</ButtonPrimary>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
