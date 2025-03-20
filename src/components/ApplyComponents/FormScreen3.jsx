import React from "react";

const FormScreen3 = ({ formData, handleChange, errors }) => {
  return (
    <div className="p-3 md:p-6 text-left text-[1.1rem]">
      {/* Clinical Diagnosis */}
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

      {/* Process Localization */}
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

      {/* Material Collection Method */}
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

      {/* Number of Localizations */}
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

      {/* Number of Containers from One Operation */}
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

      {/* Number of Slides to Prepare */}
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

      {/* Research Price Information */}
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
          <input
            type="number"
            min="0"
            value={formData.researchPrice || "0"}
            onChange={(e) => handleChange("researchPrice", e.target.value)}
            className="w-full md:w-[50%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none  rounded"
          />
        </div>
      </div>

      {/* Promo Code */}
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
