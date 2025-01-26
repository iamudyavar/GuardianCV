import { PATIENT } from "@/types/brand";
import Image from "next/image";

const patientData: PATIENT[] = [
  {
    picture: "/images/brand/brand-01.svg",
    name: "Google Google",
    severity: 1,
    timeWaited: 3,
  },
  {
    picture: "/images/brand/brand-02.svg",
    name: "Twitter Twitter",
    severity: 3,
    timeWaited: 15,
  },
  {
    picture: "/images/brand/brand-03.svg",
    name: "Github Github",
    severity: 2,
    timeWaited: 2,
  },
  {
    picture: "/images/brand/brand-04.svg",
    name: "Vimeo Vimeo",
    severity: 5,
    timeWaited: 45,
  },
  {
    picture: "/images/brand/brand-05.svg",
    name: "Facebook Meta",
    severity: 4,
    timeWaited: 20,
  },
];

const SEVERITYMAP = {
  1:"Severely Critical",
  2:"Critical",
  3:"Serous",
  4:"Fair",
  5:"Stable"
}
interface COLORMAP {
  [key: number]: string;
}
// colors: ["#FF0000", "#FF5C00", "#FFFF00", "#9ACD32", "#008000"],
const colorMap : COLORMAP = {
  1: "#FF0000",
  2: "#FF5C00",
  3: "#FFFF00",
  4: "#9ACD32",
  5: "#008000",
}

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Waiting Patients
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Picture
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Severity
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Time Waited
            </h5>
          </div>
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div> 
        <div className="border-l-[#008000] " />
        <div className="border-l-[#9ACD32] " />
        <div className="border-l-[#FFFF00]" />
        <div className="border-l-[#FF5C00] " />
        <div className="border-l-[#FF0000]" />
        {patientData.map((patient, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 border-8 border-white border-l-[${colorMap[patient.severity]}]  `}
            key={key}
          >
            {/* ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            } */}
            {/* colors: ["#FF0000", "#FF5C00", "#FFFF00", "#9ACD32", "#008000"], */}
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              {/* <div className="flex-shrink-0">
                
              </div> */}
              <Image src={patient.picture} alt="Brand" width={60} height={60} />
              {/* <p className="hidden text-black dark:text-white sm:block">
                {patient.name}
              </p> */}
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{patient.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{patient.severity}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{patient.timeWaited}</p>
            </div>

            {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div> */}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TableOne;
