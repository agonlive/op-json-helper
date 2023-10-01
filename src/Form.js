import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Input,
  Group,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Loader } from "@mantine/core";
import { CopyBlock } from "react-code-blocks";
export default function Form() {
  const [dataLicense, setDataLicense] = useState("Preview Code here");
  const [loadingLicense, setLoadingLicense] = useState(false);

  const fullNameRef = useRef(null);
  const shortNameRef = useRef(null);
  const statusRef = useRef(null);
  const regulatedByRef = useRef(null);
  const licenseTypeRef = useRef(null);
  const licenseNoRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  const clickGenerateLicense = () => {
    setLoadingLicense(true);
    const temp = [
      {
        fullName: fullNameRef.current.value,
        shortName: shortNameRef.current.value,
        status: statusRef.current.value,
        regulatedBy: regulatedByRef.current.value,
        licenseType: licenseTypeRef.current.value,
        licenseNo: licenseNoRef.current.value,
      },
    ];

    setDataLicense(JSON.stringify(temp));
    setLoadingLicense(false);
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="flex-1 max-w-[50%]">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="flex-row gap-4"
        >
          <Text
            fw={900}
            variant="gradient"
            gradient={{ from: "cyan", to: "indigo", deg: 224 }}
            size="lg"
          >
            Column licenses
          </Text>
          <Input
            ref={fullNameRef}
            size="lg"
            placeholder="fullName"
            id="fullName"
            name="fullName"
          />
          <Input
            ref={shortNameRef}
            size="lg"
            placeholder="shortName"
            id="shortName"
            name="shortName"
          />
          <Input
            ref={statusRef}
            size="lg"
            placeholder="status"
            id="status"
            name="status"
          />
          <Input
            size="lg"
            ref={regulatedByRef}
            placeholder="regulatedBy"
            id="regulatedBy"
            name="regulatedBy"
          />
          <Input
            size="lg"
            ref={licenseTypeRef}
            placeholder="licenseType"
            id="licenseType"
            name="licenseType"
          />
          <Input
            size="lg"
            ref={licenseNoRef}
            placeholder="licenseNo"
            id="licenseNo"
            name="licenseNo"
          />
          <Button
            onClick={clickGenerateLicense}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          >
            Generate Licenses
          </Button>
          <Text
            size="lg"
            fw={900}
            variant="gradient"
            gradient={{ from: "gray", to: "rgba(0, 0, 0, 1)", deg: 224 }}
          >
            Result
          </Text>
          {loadingLicense && <Loader color="blue" />}
          {!loadingLicense && (
            <CopyBlock
              text={dataLicense}
              language={"json"}
              theme={"dracula"}
              codeBlock
            />
          )}
        </Card>
      </div>
      <div className="flex-1  max-w-[50%]">
        {/* <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="flex-row gap-4"
        >
          <Text size="lg">Column licenses</Text>
          <Input size="lg" placeholder="fullName" name="fullName" />
          <Input size="lg" placeholder="shortName" name="shortName" />
          <Input size="lg" placeholder="status" name="status" />
          <Input size="lg" placeholder="regulatedBy" name="regulatedBy" />
          <Input size="lg" placeholder="licenseType" name="licenseType" />
          <Input size="lg" placeholder="licenseNo" name="licenseNo" />
          <Button
            onClick={clickGenerateLicense}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          >
            Generate Licenses
          </Button>
          <Text size="lg">Result</Text>
          <Textarea
            size="lg"
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
        </Card> */}
      </div>
    </div>
  );
}
