import React from "react";

const FormScreen4 = ({ formData, handleChange, errors }) => {
  return (
    <div className="p-3 md:p-6 text-left text-[1.1rem]">
      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Способ доставки <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="selfPatient"
            name="relationToPatient"
            checked={formData.deliveryMethod === "Самостоятельно (в наш офис)"}
            onChange={() =>
              handleChange("deliveryMethod", "Самостоятельно (в наш офис)")
            }
            className="mr-2"
          />
          <label htmlFor="selfPatient">Самостоятельно (в наш офис)</label>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="radio"
            id="representative"
            name="relationToPatient"
            checked={formData.deliveryMethod === "Курьером"}
            onChange={() => handleChange("deliveryMethod", "Курьером")}
            className="mr-2"
          />
          <label htmlFor="representative">Курьером</label>
        </div>
        {errors.deliveryMethod && (
          <p className="text-red-500 text-sm italic mt-1">
            {errors.deliveryMethod}
          </p>
        )}
      </div>

      {formData.deliveryMethod === "Курьером" && (
        <div className="mb-6">
          <label className="block text-[#08788b] text-[1.4rem] mb-1">
            Адрес доставки <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded "
          />
          <div className="text-xs text-gray-500 mt-2 mb-4 italic">Город</div>
          <input
            type="text"
            value={formData.street || ""}
            onChange={(e) => handleChange("street", e.target.value)}
            className="w-full shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded "
          />
          <div className="text-xs text-gray-500 mt-2 mb-4 italic">Улица</div>
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div className="md:w-[49%]">
              <input
                type="text"
                value={formData.house || ""}
                onChange={(e) => handleChange("house", e.target.value)}
                className="w-full shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded"
              />
              <div className="text-xs text-gray-500 mt-2  italic">
                Дом/корпус
              </div>
            </div>
            <div className="md:w-[49%]">
              <input
                type="text"
                value={formData.apartment || ""}
                onChange={(e) => handleChange("apartment", e.target.value)}
                className="w-full shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded"
              />
              <div className="text-xs text-gray-500 mt-2  italic">Квартира</div>
            </div>
          </div>
          {errors.deliveryAddress && (
            <p className="text-red-500 text-sm italic mt-1">
              {errors.deliveryAddress}
            </p>
          )}
        </div>
      )}

      <div className="mb-6">
        <label className="block text-[#08788b] text-[1.4rem] mb-1">
          Комментарий к заявке
        </label>
        <textarea
          value={formData.comment || ""}
          onChange={(e) => handleChange("comment", e.target.value)}
          className="w-full md:w-[80%] shadow-md shadow-black/30 p-2 border bg-[#d5e6e9] border-none rounded resize h-20"
        />
      </div>
      <div className=" flex gap-3 items-center">
        <input
          checked={formData.consentGiven}
          onChange={(e) => handleChange("consentGiven", !formData.consentGiven)}
          type="checkbox"
          className="h-6 w-6"
        />
        <label className="block text-[#08788b] text-[1.4rem] ">
          Я даю согласие на обработку персональных данных{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.consentGiven && (
        <p className="text-red-500 text-sm italic mt-1">
          {errors.consentGiven}
        </p>
      )}
    </div>
  );
};

export default FormScreen4;
