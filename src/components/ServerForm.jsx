import React, { useEffect, useState, useRef } from "react";
import {
    Card,
    Text,
    Button,
    Input,
    Group,
    Divider,
    ActionIcon
} from "@mantine/core";
import { useForm } from '@mantine/form';
import { Loader } from "@mantine/core";
import { CopyBlock } from "react-code-blocks";


import { IconPlus, IconTrash } from '@tabler/icons-react';

export default function SoftwareForm() {

    const form = useForm({
        initialValues: {
            dataLicense: [{
                nameServer: "",
            }],
        },
    });

    const fields = form.values.dataLicense.map((item, index) => (

        <div className=" flex flex-col gap-3">
            <Group key={item.key} className='my-0' gap="xs" >
                <Input
                    withAsterisk
                    size="sm"
                    placeholder={`Name Server`}
                    style={{ flex: 1 }}
                    {...form.getInputProps(`dataLicense.${index}.nameServer`)}
                />
            </Group>


            <div>
                <ActionIcon
                    color="red"
                    onClick={() => form.removeListItem('dataLicense', index)}
                    className='p-4'
                >
                    <IconTrash size="1rem" />
                </ActionIcon>
            </div>

        </div>
    ));


    const [dataLicense, setDataLicense] = useState("Preview Code here");
    const [loadingLicense, setLoadingLicense] = useState(false);



    useEffect(() => {
        return () => { };
    }, []);

    const clickGenerateLicense = () => {
        setLoadingLicense(true);


        setDataLicense(JSON.stringify(form.values.dataLicense, null, 2));
        setLoadingLicense(false);
    };

    return (
        <div className="flex-1 justify-center gap-4">
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
                    Server (ต่อ)
                </Text>
                {fields}
                <Group mt="md" grow>
                    <Button
                        fullWidth
                        leftSection={<IconPlus size={14} />}
                        onClick={() =>
                            form.insertListItem('dataLicense', {
                                nameServer: ''
                            })
                        }
                    >
                        Add Row
                    </Button>
                    <Button
                        color={'red'}
                        fullWidth
                        leftSection={<IconTrash size={14} />}
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete all data?')) {
                                form.reset();
                            }
                        }

                        }
                    >
                        Clear
                    </Button>
                </Group>
                <Divider />

                <div>
                    <Button
                        onClick={clickGenerateLicense}
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                    >
                        Generate
                    </Button>

                    <Divider my="sm" />

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
                        <div className="code-block-bay max-w-[455px] text-left">
                            <CopyBlock
                                className='overflow-hidden w-[455px]'
                                text={dataLicense}
                                language={"json"}
                                theme={"dracula"}
                                codeBlock
                                wrapLines
                            />
                        </div>
                    )}
                </div>

            </Card>

        </div>
    );
}
