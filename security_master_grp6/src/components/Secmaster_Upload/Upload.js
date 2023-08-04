import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CancelIcon from "@mui/icons-material/Cancel";
import DescriptionIcon from "@mui/icons-material/Description";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    // maxFiles: 1,
  });
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  return (
    <>
      <h1
        style={{ color: "#21313A" }}
        className="title text-3xl font-bold mt-14"
      >
        Upload Equity File
      </h1>

      {/* Drag & Drop Area */}
      <div
        className="p-20 mt-7 text-center mx-auto cursor-pointer border border-green-400 border-dashed rounded"
        style={{ width: 800 }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <h2 className="font-medium text-xl text-green-600">
            Drop the files here ...
          </h2>
        ) : (
          <h2
            className="font-medium text-xl text-green-600"
            style={{ listStyle: "none" }}
          >
            Drag & drop CSV file here, or click to select file!
          </h2>
        )}
      </div>

      {/* Accepted Files Preview*/}
      <h2
        className="title text-xl font-semibold text-gray-700 mt-10 border-b-2 pb-2 mx-auto"
        style={{ width: 800 }}
      >
        Accepted File
      </h2>
      <ul className="mt-6 mx-auto">
        {files.map((file) => (
          <li key={file.name}>
            <button
              type="button"
              className="w-8 h-8 border border-secondary-400"
              onClick={() => removeFile(file.name)}
            >
              <CancelIcon
                className="w-6 h-6 fill-white"
                style={{ color: "red" }}
              />
            </button>
            <div
              className="mt-2 text-neutral-500 font-medium text-xl border border-grey-200 p-5 mx-auto cursor-pointer"
              style={{ width: 250 }}
            >
              <DescriptionIcon className="text-green-600" /> {file.name}
            </div>
          </li>
        ))}
      </ul>

      {/* Regected Files */}
      <h2
        className="title text-xl font-semibold text-gray-700 mt-14 border-b-2 pb-2 mx-auto"
        style={{ width: 800 }}
      >
        Regected File
      </h2>
      <ul className="mt-6 flex flex-col">
        {rejected.map(({ file, errors }) => (
          <li key={file.name} className="flex items-start justify-between">
            <div>
              <div
                className="text-neutral-500 font-medium text-md cursor-pointer"
                style={{ marginRight: -1520 }}
              >
                {file.name}
              </div>
              <ul
                className="text-[12px] text-red-500"
                style={{ marginRight: -1520 }}
              >
                {errors.map((error) => (
                  <li key={error.code}>{error.message}</li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="text-sm uppercase text-gray-900 bg-white border border-red-400 focus:outline-none hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2"
              style={{ marginRight: 500, marginBottom: 70 }}
              onClick={() => removeRejected(file.name)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Upload;
