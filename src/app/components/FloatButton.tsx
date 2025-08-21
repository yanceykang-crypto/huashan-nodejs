import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Image,
  Alert,
} from "@heroui/react";
import { CustomServiceIcon } from "./Icons";
import { PhoneCall } from "lucide-react";
import { telNumber } from "@/app/config/common";

export const FloatButton = () => {
  return (
    <div className={`fixed bottom-10 right-10 z-[999] `}>
      <Popover placement="left-end">
        <PopoverTrigger>
          <Button isIconOnly className="w-16 h-16">
            <CustomServiceIcon className="w-10 h-10" fill="white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-3 flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center">客户热线</h1>
            <div className="flex gap-3 p-3 items-center">
              <PhoneCall color="red" />
              <span className="font-bold font-[lexend]">{telNumber}</span>
            </div>
            <Alert
              hideIcon
              color="secondary"
              title={`服务时间：24小时在线`}
              className="py-1 text-center rounded-sm"
              classNames={{
                mainWrapper: "min-h-5  ms-0",
                title: "text-xs",
              }}
            />
            <Image
              src="/images/1662099999696752.png"
              alt=""
              className="w-full max-w-full mt-2"
              classNames={{
                wrapper: "w-full !max-w-full",
              }}
            ></Image>
            <p className="text-xs text-center">扫一扫添加客服</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
