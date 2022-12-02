// Components
import Header from "../components/home/Header";
import OnboardingForm from "../components/onboarding/OnboardingForm";

const Onboarding = () => {
  return (
    <div className="overlay">
      {/* Header */}
      <Header minimal={true} setShowModal={() => {}} showModal={false} />

      {/* Onboarding Form */}
      <OnboardingForm />
    </div>
  );
};
export default Onboarding;
