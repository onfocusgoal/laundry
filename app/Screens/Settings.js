import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Settings = () => {
	const [buttonData, setButtonData] = useState({
		permission: false,
		locationServices: false,
		sounds: false,
		ads: false,
	});

	const toggleSwitch = (prop, val) =>
		setButtonData((prev) => ({ ...prev, [prop]: val }));

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
				padding: 20,
				justifyContent: "space-between",
			}}>
			<View>
				<View style={{ borderBottomColor: "#ccc", borderBottomWidth: 0.5 }}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
							paddingVertical: 3,
						}}>
						<Text style={{ fontSize: 15 }}>Permission</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={buttonData.permission ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={(val) => toggleSwitch("permission", val)}
							value={buttonData?.permission}
						/>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
							paddingVertical: 3,
						}}>
						<Text style={{ fontSize: 15 }}>Location Services</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={
								buttonData.locationServices ? "#f5dd4b" : "#f4f3f4"
							}
							ios_backgroundColor="#3e3e3e"
							onValueChange={(val) =>
								toggleSwitch("locationServices", val)
							}
							value={buttonData?.locationServices}
						/>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
							paddingVertical: 3,
						}}>
						<Text style={{ fontSize: 15 }}>Sounds</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={buttonData.sounds ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={(val) => toggleSwitch("sounds", val)}
							value={buttonData?.sounds}
						/>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
							paddingVertical: 3,
						}}>
						<Text style={{ fontSize: 15 }}>Ads</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={buttonData.ads ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={(val) => toggleSwitch("ads", val)}
							value={buttonData?.ads}
						/>
					</View>
				</View>

				<View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}>
						<Text style={{ fontSize: 15 }}>Help</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}>
						<Text style={{ fontSize: 15 }}>About Application</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}>
						<Text style={{ fontSize: 15 }}>Send Feedback</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}>
						<Text style={{ fontSize: 15 }}>Support</Text>
					</View>
				</View>
			</View>

			<View>
				<TouchableOpacity
					style={{
						backgroundColor: "rgb(94,174,199)",
						paddingHorizontal: 20,
						paddingVertical: 15,
						borderRadius: 5,
					}}>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Sign Out
					</Text>
				</TouchableOpacity>
			</View>
			{/* <Text>Settings</Text> */}
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({});
