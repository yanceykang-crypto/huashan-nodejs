import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  Image,
} from "@heroui/react";
import { FC, useState } from "react";
import { Input } from "@heroui/react";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Search: FC<TProps> = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    if (!searchValue) {
      return;
    }
    window.location.href = `https://www.baidu.com/s?wd=${searchValue} site:www.dghuashan.com`;
  };
  return (
    <Drawer
      isOpen={isOpen}
      size={"full"}
      onClose={onClose}
      className="z-[200]"
      classNames={{ closeButton: "text-white bg-primary" }}
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerBody className="bg-black text-white px-10 md:px-100">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="mb-10 -mt-20">
                  <Image
                    src="/images/site_logo.png"
                    className="h-16"
                    alt="logo"
                  />
                </div>
                <div className="flex gap-5 w-full">
                  <Input
                    color="default"
                    placeholder="Type to search..."
                    size="lg"
                    className="flex-1"
                    classNames={{
                      input: "text-default placeholder:text-[#000]",
                    }}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Button
                    size="lg"
                    color="primary"
                    onPress={() => {
                      onSearch();
                    }}
                  >
                    搜索
                  </Button>
                </div>
              </div>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Search;
