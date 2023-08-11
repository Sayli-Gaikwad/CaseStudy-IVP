import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EditEquity = ({ item, closeModal }) => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [details, setDetails] = useState({
    description: `${item.security_desc}`,
    currency: `${item.curr}`,
    tot_shares: `${item.tot_shares_out}`,
    open_price: `${item.open_price}`,
    close_price: `${item.close_price}`,
    div_date: `${formatDate(item.div_date)}`,
    pf_rating: `${item.pf_rating}`,
  });

  useEffect(() => {
    const isAnyFieldChanged =
      details.description !== item.security_desc ||
      details.currency !== item.curr ||
      details.tot_shares !== item.tot_shares_out ||
      details.open_price !== item.open_price ||
      details.close_price !== item.close_price ||
      details.div_date !== formatDate(item.div_date) ||
      details.pf_rating !== item.pf_rating;

    setIsFormChanged(isAnyFieldChanged);
  }, [details, item]);

  const [validationErrors, setValidationErrors] = useState({
    tot_shares: "",
    open_price: "",
    close_price: "",
  });

  const handleSharesChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, tot_shares: newValue });
      setValidationErrors({ ...validationErrors, tot_shares: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        tot_shares: "Total shares must be a non-negative number.",
      });
    }
  };

  const handleOpenPriceChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, open_price: newValue });
      setValidationErrors({ ...validationErrors, open_price: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        open_price: "Open price must be a non-negative number.",
      });
    }
  };

  const handleClosePriceChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, close_price: newValue });
      setValidationErrors({ ...validationErrors, close_price: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        close_price: "Close price must be a non-negative number.",
      });
    }
  };

  const editSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Changes have been updated successfully!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then(() => {
      closeModal(false);
    });
  };

  const getPfRatingOptions = () => {
    return ["AA+", "A-", "AA-", "A", "AA", "BBB+", "BBB"].map((rating) => (
      <option key={rating} value={rating}>
        {rating}
      </option>
    ));
  };

  const getPricingCurrencyOptions = () => {
    return [
      "USD",
      "KRW",
      "GBP",
      "EUR",
      "JPY",
      "CAD",
      "AUD",
      "CHF",
      "CNY",
      "INR",
      "SGD",
      "HKD",
      "NZD",
      "SEK",
      "NOK",
      "ZAR",
      "BRL",
      "RUB",
      "TRY",
      "MXN",
    ].map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="overflow-auto max-h-[80vh]">
        <div className="bg-white p-2" style={{ width: 500 }}>
          <button
            className="ml-2 font-medium text-xl"
            onClick={() => closeModal(false)}
          >
            X
          </button>
          <h1 className="font-semibold text-center text-xl text-gray-700 mt-3 mb-3">
            Edit Equity Details
          </h1>
          <form onSubmit={editSubmit}>
            <div className="flex flex-col">
              <label className="ml-5 text-md font-medium mb-1" for="sec_name">
                Equity Name
              </label>
              <input
                type="text"
                id="sec_name"
                disabled={true}
                value={item.security_name}
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="desc">
                Description
              </label>
              <input
                type="text"
                id="desc"
                value={details.description}
                onChange={(e) =>
                  setDetails({ ...details, description: e.target.value })
                }
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="curr">
                Pricing Currency
              </label>
              <select
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
                value={details.currency}
                id="curr"
                onChange={(e) =>
                  setDetails({ ...details, currency: e.target.value })
                }
              >
                {getPricingCurrencyOptions()}
              </select>

              <label className="ml-5 text-md font-medium mb-1" for="tot_share">
                Total Shares Outstanding
              </label>
              <input
                type="text"
                id="tot_shares"
                value={details.tot_shares}
                onChange={handleSharesChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.tot_shares ? "border-red-500" : ""
                }`}
              />

              {validationErrors.tot_shares && (
                <p className="text-red-500 ml-5">
                  {validationErrors.tot_shares}
                </p>
              )}

              <label className="ml-5 text-md font-medium mb-1" for="open_price">
                Open Price
              </label>
              <input
                type="text"
                id="open_price"
                value={details.open_price}
                onChange={handleOpenPriceChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.open_price ? "border-red-500" : ""
                }`}
              />

              {validationErrors.open_price && (
                <p className="text-red-500 ml-5">
                  {validationErrors.open_price}
                </p>
              )}

              <label className="ml-5 text-md font-medium mb-1" for="open_price">
                Close Price
              </label>
              <input
                type="text"
                id="open_price"
                value={details.close_price}
                onChange={handleClosePriceChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.close_price ? "border-red-500" : ""
                }`}
              />

              {validationErrors.close_price && (
                <p className="text-red-500 ml-5">
                  {validationErrors.close_price}
                </p>
              )}

              <label className="ml-5 text-md font-medium mb-1" for="div_date">
                Dividend Date
              </label>
              <input
                type="date"
                id="div_date"
                value={details.div_date}
                onChange={(e) =>
                  setDetails({ ...details, div_date: e.target.value })
                }
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="pf_rating">
                PF Credit Rating
              </label>
              <select
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
                value={details.pf_rating}
                id="pf_rating"
                onChange={(e) =>
                  setDetails({ ...details, pf_rating: e.target.value })
                }
              >
                {getPfRatingOptions()}
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className={`px-5 py-2 ${
                  isFormChanged
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 text-gray-500"
                } rounded`}
                disabled={!isFormChanged}
              >
                Update
              </button>
              <button
                onClick={() => closeModal(false)}
                className="px-5 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEquity;
