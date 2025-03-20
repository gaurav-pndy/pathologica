import { useState } from "react";
import FormScreen1 from "./FormScreen1";
import FormScreen2 from "./FormScreen2";
import FormScreen3 from "./FormScreen3";
import FormScreen4 from "./FormScreen4";
import { ToastContainer, toast } from "react-toastify";

function ApplyForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    relationToPatient: null,
    consultationType: null,
    researchCategory: null,
    lastName: null,
    firstName: null,
    middleName: "",
    gender: null,
    dateOfBirth: null,
    age: "",
    phoneNumber: null,
    email: null,
    clinicalDiagnosis: null,
    processLocalization: null,
    materialCollectionMethod: null,
    numberOfLocalizations: null,
    numberOfContainers: null,
    numberOfSlides: "",
    researchPrice: "",
    promoCode: "",
    deliveryMethod: null,
    city: null,
    street: null,
    house: null,
    apartment: null,
    comment: "",
    consentGiven: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.relationToPatient)
        newErrors.relationToPatient = "This field is required";
      if (!formData.consultationType)
        newErrors.consultationType = "This field is required";
      if (
        formData.consultationType !== "Консультация Патолога" &&
        !formData.researchCategory
      )
        newErrors.researchCategory = "This field is required";
    }
    if (step === 2) {
      if (!formData.lastName) newErrors.lastName = "This field is required";
      if (!formData.firstName) newErrors.firstName = "This field is required";
      if (!formData.gender) newErrors.gender = "This field is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "This field is required";
      if (!formData.phoneNumber)
        newErrors.phoneNumber = "This field is required";
      if (!formData.email) newErrors.email = "This field is required";
    }
    if (step === 3) {
      if (!formData.clinicalDiagnosis)
        newErrors.clinicalDiagnosis = "This field is required";
      if (!formData.processLocalization)
        newErrors.processLocalization = "This field is required";
      if (!formData.materialCollectionMethod)
        newErrors.materialCollectionMethod = "This field is required";
      if (!formData.numberOfLocalizations)
        newErrors.numberOfLocalizations = "This field is required";
      if (!formData.numberOfContainers)
        newErrors.numberOfContainers = "This field is required";
    }
    if (step === 4) {
      if (!formData.deliveryMethod)
        newErrors.deliveryMethod = "This field is required";
      if (
        formData.deliveryMethod === "Курьер" &&
        (!formData.city ||
          !formData.street ||
          !formData.house ||
          !formData.apartment)
      )
        newErrors.deliveryAddress = "Please enter full delivery address";
      if (!formData.consentGiven)
        newErrors.consentGiven = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Application submitted successfully", {
          position: "top-center",
        });
        console.log(data.message); // Handle success response

        // Clear the form data after successful submission
      } else {
        console.log(formData);

        const errorData = await response.json();
        console.error("Error from server:", errorData);
        toast.error("Error submitting the form"), { position: "top-center" };
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      toast.error("Network error", {
        position: "top-center",
      });
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 4) {
        handleSubmit();
      } else {
        setStep((prev) => prev + 1);
        setErrors({});
      }
    }
  };

  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormScreen1
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <FormScreen2
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <FormScreen3
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <FormScreen4
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative max-w-4xl px-3 md:px-10 my-10 mx-auto tracking-tighter">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div>
          <div className="flex flex-col md:flex-row gap-5 items-start border-b-2 border-[#08788b] p-3 md:p-6">
            <div className="flex items-center w-fit ">
              <img
                src="https://static.wixstatic.com/media/e6f22e_26677178adb448a9a9816ef76b9020b9~mv2.png"
                alt="PathologicaService"
                className="w-60 object-contain"
              />
            </div>
            <h2 className="text-[1.6rem] text-left font-semibold text-[#08788b] ">
              Заявка на цитологическое, гистологическое и комплексное
              исследование
            </h2>
          </div>

          {renderStep()}
          <div className="flex justify-between p-3 md:p-6 mb-4 text-lg">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className="px-4 py-2 bg-[#2f86c4] text-white hover:bg-[#2f86e9] transition-all duration-300 rounded-full shadow-md shadow-black/40 cursor-pointer"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#2f86c4] text-white hover:bg-[#2f86e9] transition-all duration-300 rounded-full shadow-md shadow-black/40 cursor-pointer"
            >
              {step < 4 ? "Далее" : "Отправить"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
