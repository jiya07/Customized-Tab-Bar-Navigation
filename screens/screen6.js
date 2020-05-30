import React, { Component } from 'react';
import {
    View,
    Text,TouchableOpacity,StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    availableTimeSlots: {
        height: 40,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        elevation: 5,
        borderRadius: 5,
        justifyContent: "center"
    },
    occupiedTimeSlots: {
        height: 40,
        backgroundColor: '#ffff',
        shadowColor: '#333333',
        padding: 5,
        shadowOffset:
            { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        paddingHorizontal: 20,
        elevation: 5,
        borderRadius: 5,
        justifyContent: "center"
    }
})
export default class Screen6 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#999999" }}>03- 06 PM</Text>
                    </View>
                    <View>

                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around" }}>
                            <View style={styles.occupiedTimeSlots}><Text>04:00</Text></View>
                            <View style={styles.occupiedTimeSlots}><Text>04:15</Text></View>
                            <View style={styles.occupiedTimeSlots}><Text>04:30</Text></View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around", marginTop: 15 }}>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>04:45</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>05:00</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>05:15</Text></View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around", marginTop: 15 }}>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>06:15</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>05:15</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>05:15</Text></View>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "center" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#999999" }}>06- 09 PM</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around" }}>
                            <View style={styles.occupiedTimeSlots}><Text>06:00</Text></View>
                            <View style={styles.occupiedTimeSlots}><Text>06:15</Text></View>
                            <View style={styles.occupiedTimeSlots}><Text>06:30</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around", marginTop: 15 }}>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>06:45</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>07:00</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>07:15</Text></View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: "row", width: 300, justifyContent: "space-around", marginTop: 15 }}>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>07:30</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>07:45</Text></View>
                            <View style={styles.availableTimeSlots}><Text style={{ color: "#999999" }}>08:00</Text></View>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    }
}