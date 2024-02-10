import { Flex } from "antd";
import { HiMiniArrowLongUp } from "react-icons/hi2";
import { ArrowIconsProps } from "../../helpers/types";

const UpArrow: React.FC<ArrowIconsProps> = ({ size = "25" }) => {
  return (
    <Flex className="bg-green-100 p-2 rounded-md items justify-center">
      <HiMiniArrowLongUp size={size} color="#34d399" />
    </Flex>
  );
};

export default UpArrow;
