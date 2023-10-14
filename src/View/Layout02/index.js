import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export const Layout02 = function ({ navigation, route }) {
    const box = ["#C5F1FB", "#F30D0D", "#000000", "#234896"];
    const sourceImage = [
        {
            id: 0,
            path: require("../../../assets/vs_silver.png"),
        },
        {
            id: 1,
            path: require("../../../assets/vs_red.png"),
        },
        {
            id: 2,
            path: require("../../../assets/vs_black.png"),
        },
        {
            id: 3,
            path: require("../../../assets/vs_blue.png"),
        },
    ];
    const index = route.params.data.imageSource.id;
    const [imageSource, setImageSource] = useState(sourceImage[index]);

    const handLerImageSourceChange = function (index) {
        setImageSource(sourceImage[index]);
        route.params.data.updateImageSource(sourceImage[index]);
    };
    return (
        <View style={styles.container}>
            <View style={styles.flex2}>
                <Image
                    style={{
                        width: 112,
                        height: 132,
                    }}
                    source={imageSource.path}
                    resizeMode="contain"
                />
                <Text style={styles.lblTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={styles.flex7}>
                <Text style={styles.lblBottom}>Chọn một màu bên dưới:</Text>
                <View
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <View>
                        {box.map((e, index) => {
                            return (
                                <Pressable
                                    onPress={() => {
                                        handLerImageSourceChange(index);
                                    }}
                                    style={[styles.box, { backgroundColor: e }]}
                                ></Pressable>
                            );
                        })}
                    </View>
                </View>
                <Pressable
                    onPress={() => {
                        navigation.navigate("layout01");
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.lblBtn}>XONG</Text>
                </Pressable>
            </View>
        </View>
    );
};
