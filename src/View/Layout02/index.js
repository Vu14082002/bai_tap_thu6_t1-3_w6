import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export const Layout02 = function () {
    const box = ["#C5F1FB", "#F30D0D", "#000000", "#234896"];
    const sourceImage = [
        {
            id: 0,
            sourceImage: require("../../../assets/vs_blue.png"),
        },
        {
            id: 1,
            sourceImage: require("../../../assets/vs_red.png"),
        },
        {
            id: 2,
            sourceImage: require("../../../assets/vs_black.png"),
        },
        {
            id: 3,
            sourceImage: require("../../../assets/vs_silver.png"),
        },
    ];
    const [imageSource, setImageSource] = useState(sourceImage[0]);

    const handLerImageSourceChange = function (index) {
        setImageSource(sourceImage[index]);
    };
    console.log(imageSource);
    return (
        <View style={styles.container}>
            <View style={styles.flex2}>
                <Image
                    style={{
                        width: 112,
                        height: 132,
                    }}
                    source={imageSource.sourceImage}
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
                <Pressable style={styles.btn}>
                    <Text style={styles.lblBtn}>XONG</Text>
                </Pressable>
            </View>
        </View>
    );
};
