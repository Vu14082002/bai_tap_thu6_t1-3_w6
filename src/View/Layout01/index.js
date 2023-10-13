import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

export const Layout01 = function () {
    return (
        <View style={[styles.container]}>
            <View style={{ flex: 6, width: "100%", alignItems: "center" }}>
                <Image
                    style={{
                        width: 301,
                        height: 361,
                    }}
                    source={require("../../../assets/vs_blue.png")}
                />
            </View>
            <View style={{ flex: 4, paddingLeft: 20 }}>
                <View style={styles.group2_flex4_top}>
                    <Text style={styles.group2_flex4_top_title}>
                        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                    </Text>
                    <View style={{ flexDirection: "row", height: 30 }}>
                        {Array.from({ length: 5 }).map(() => {
                            return (
                                <Image
                                    style={{ width: 25, height: 25 }}
                                    source={require("../../../assets/star.png")}
                                />
                            );
                        })}
                        <Text style={styles.textStar}>(Xem 828 đánh giá)</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.price}>1.790.000 đ</Text>
                        <View style={{ flexDirection: "row", height: 21, marginLeft: 60 }}>
                            <Image
                                style={{
                                    width: 92,
                                    height: 2,
                                    position: "absolute",
                                    top: 10,
                                }}
                                source={require("../../../assets/deleteLine.png")}
                            />
                            <Text style={styles.priceDelete}>1.790.000 đ</Text>
                        </View>
                    </View>
                    {/* View Hoan tien */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            height: 20,
                        }}
                    >
                        <Text style={styles.textNote}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                            }}
                            source={require("../../../assets/option.png")}
                        />
                    </View>
                    <Pressable style={styles.btn}>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.lblBtn}>4 MÀU-CHỌN MÀU</Text>
                            <Image
                                style={{
                                    width: 12,
                                    height: 14,
                                }}
                                resizeMode="contain"
                                source={require("../../../assets/vector.png")}
                            />
                        </View>
                    </Pressable>
                </View>
                <View style={{ flex: 6, justifyContent: "flex-end" }}>
                    <Pressable style={styles.btnBottom}>
                        <Text style={styles.lblBtnBottom}>CHỌN MUA</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
