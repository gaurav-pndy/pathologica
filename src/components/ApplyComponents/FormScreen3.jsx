import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormScreen3 = ({ formData, handleChange, errors }) => {
  return (
    <div className="p-3 md:p-6 text-left text-[1.1rem]">
      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Клинический диагноз <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.clinicalDiagnosis || ""}
          onChange={(e) => handleChange("clinicalDiagnosis", e.target.value)}
          className="w-full  shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded resize h-20"
          required
        />
        {errors.clinicalDiagnosis && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.clinicalDiagnosis}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Локализация процесса <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.processLocalization || ""}
          onChange={(e) => handleChange("processLocalization", e.target.value)}
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
          required
        />
        {errors.processLocalization && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.processLocalization}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Способ получения материала (пункция, соскоб, отпечаток, биопсия,
          послеоперационный материал и т.д.):{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.materialCollectionMethod || ""}
          onChange={(e) =>
            handleChange("materialCollectionMethod", e.target.value)
          }
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
          required
        />
        {errors.materialCollectionMethod && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.materialCollectionMethod}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Количество локализаций <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          min="0"
          value={formData.numberOfLocalizations || ""}
          onChange={(e) =>
            handleChange("numberOfLocalizations", e.target.value)
          }
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
          required
        />
        {errors.numberOfLocalizations && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.numberOfLocalizations}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Количество контейнеров от одной операции{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          min="0"
          value={formData.numberOfContainers || ""}
          onChange={(e) => handleChange("numberOfContainers", e.target.value)}
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
          required
        />
        {errors.numberOfContainers && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.numberOfContainers}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Количество стекол, которые необходимо изготовить
        </label>
        <input
          type="number"
          min="0"
          value={formData.numberOfSlides || ""}
          onChange={(e) => handleChange("numberOfSlides", e.target.value)}
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
        />
        <div className="text-xs text-gray-500 mt-1 italic">
          При наличии у Вас данной информации
        </div>
      </div>

      <div className="mb-6">
        <h3 className="block text-[#08788b] text-[1.45rem] ">
          ЦЕНА ИССЛЕДОВАНИЯ
        </h3>
        <p className="text-sm text-[#3097a9] leading-4.5 mb-2 italic">
          (Окончательная цена может быть изменена после проведения первого этапа
          исследования, в зависимости от объема работы. При необходимости
          изготовления дополнительных блоков, стекол, дополнительного
          окрашивания, в том числе проведения ИГХ и других
          молекулярно-генетических исследований, цена может быть увеличена.
          Конечная стоимость исследования зависит от объема работы и будет c
          Вами согласована.)
        </p>
        <div className="flex items-center">
          <PhoneInput
            country={"ru"}
            value={formData.phone || ""}
            onChange={(phone) => handleChange("phone", phone)}
            inputClass="!w-full md:!w-[50%] !rounded !shadow-md !shadow-black/30 !border-none !bg-[#d5e6e9] !p-5.5 !text-black !pl-10"
            buttonClass="!bg-[#d5e6e9] !border-none"
            dropdownClass="!bg-white !text-black !shadow-lg"
            containerClass="w-full md:w-[50%]"
            enableSearch
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[#08788b] text-[1.4rem] mb-2">
          Промокод
        </label>
        <input
          type="text"
          value={formData.promoCode || ""}
          onChange={(e) => handleChange("promoCode", e.target.value)}
          className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
        />
      </div>
    </div>
  );
};

export default FormScreen3;
