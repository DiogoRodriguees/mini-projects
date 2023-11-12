import { Card, Col, Flex, Progress, Typography } from "antd";

export const CardDetail = () => {
    const defineColor = (percent: number) => {
        if (percent < 25) return "red";
        if (percent < 50) return "orange";
        if (percent < 75) return "yellow";
        return "green";
    };

    return (
        <Card className="bg-white h-5/6 w-full px-10 py-8 rounded-md shadow-md ">
            <Col>
                <Flex className="justify-start items-center">
                    <Typography.Text className="text-4xl">
                        Marca - 2003
                    </Typography.Text>
                </Flex>
                <Flex className="w-4/5 gap-2 my-10" vertical>
                    <Typography.Text>Conservação</Typography.Text>
                    <Progress
                        className="w-2/5"
                        percent={79}
                        strokeColor={defineColor(79)}
                    />
                </Flex>
                <Flex>
                    <Typography.Text className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam provident quos saepe doloremque atque sint
                        laudantium aliquam! Error debitis saepe, vero voluptatem
                        illo distinctio molestiae cupiditate molestias
                        perspiciatis velit perferendis. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Ullam provident quos
                        saepe doloremque atque sint laudantium aliquam! Error
                        debitis saepe, vero voluptatem illo distinctio molestiae
                        cupiditate molestias perspiciatis velit perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam provident quos saepe doloremque atque sint
                        laudantium aliquam! Error debitis saepe, vero voluptatem
                        illo distinctio molestiae cupiditate molestias
                        perspiciatis velit perferendis.
                    </Typography.Text>
                </Flex>
            </Col>
        </Card>
    );
};
