import { Flex } from "antd";
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { ArrowIconsProps } from "../../helpers/types";

const DownArrow: React.FC<ArrowIconsProps> = ({ size = "25" }) => {
  return (
    <Flex className="bg-red-100 p-2 rounded-md justify-center">
      <HiMiniArrowLongDown size={size} color="#f87171" />
    </Flex>
  );
};

export default DownArrow;
