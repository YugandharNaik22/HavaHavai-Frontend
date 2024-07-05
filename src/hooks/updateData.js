import { useContext, useState } from "react";
import { context } from "../context/ContextProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { pic } from "../pic/pic";

const useUpdateData = (close) => {
    const [loadUpdate, setLoadUpdate] = useState(false);

    const { details, setAirports } = useContext(context);

    const updateData = async (close) => {
        try {
          if (
            details.name &&
            details.country &&
            details.code &&
            details.terminals
          ) {
              if (typeof(details.terminals) == "number") {
                  setLoadUpdate(true);
              const res = await axios.post(
                `${pic}/update`,
                details
                  );
              toast.success("Airport updated successfully !!!");
                  setAirports(res?.data);
                  setLoadUpdate(false);
              close();
              } else {
                  setLoadUpdate(false);
              toast.error("must be a number");
            }
          } else {
              setLoadUpdate(false);
            toast.error("Please add all the details");
          }
        } catch (error) {
            setLoadUpdate(false);
          toast.error(error.message);
        }
    }
  return {updateData,loadUpdate}
}

export default useUpdateData;