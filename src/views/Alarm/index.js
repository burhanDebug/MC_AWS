import React, { useState } from 'react';
import { View, Dimensions, ScrollView, Text, TouchableOpacity, Modal, FlatList, Button } from 'react-native'
import { Thumbnail, Icon, Accordion } from 'native-base';
import styles from './styles';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const dataArray = [
	{ title: "Server 1", content: "10:00 - 6:00" },
	{ title: "Server 2", content: "10:00 - 6:00" },
	{ title: "Server 3", content: "10:00 - 6:00" },
	{ title: "Server 4", content: "10:00 - 6:00" },
	{ title: "Server 5", content: "10:00 - 6:00" },
	{ title: "Server 6", content: "10:00 - 6:00" },
];

const WEEK_DATA = [
	{ id: 'Sunday', title: 'S' },
	{ id: 'Monday', title: 'M' },
	{ id: 'Tuesday', title: 'T' },
	{ id: 'Wednesday', title: 'W' },
	{ id: 'Thursday', title: 'T' },
	{ id: 'Friday', title: 'F' },
	{ id: 'Saturday', title: 'S' }
];

function Item({ id, title, selected, onSelect}) {
	return (
		
		<TouchableOpacity 
			onPress={() => onSelect(id)}
			style={[
				styles.item,
				{ backgroundColor: selected ? '#e5ac00' : '#262626' },
			]}
		>
			<View style={{alignSelf:"center",padding:5}}>
			<Text style={[styles.DayTextWeek,{color:selected? '#262626':'#FFFFFF'}]}>{title}</Text>
			</View>
		</TouchableOpacity>
		
	);
}


function WEEK_ALARMS(props) {
	const [selected, setSelected] = React.useState(new Map());

	const onSelect = React.useCallback(
		id => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected],
	);
	
	return (
		
			<FlatList style={{flex:1,flexDirection:"row",justifyContent:"space-around",}}
				data={WEEK_DATA}
				renderItem={({ item }) => (
					<Item
						id={item.id}
						title={item.title}
						selected={!!selected.get(item.id)}
						onSelect={onSelect}
					/>
				)}
				keyExtractor={item => item.id}
				extraData={selected}
			/>
			
	
	);
}

export default class Alarm extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			updating: false
		}
	}

	buttonPressed = () => {
		this.setState({ updating: true })

	}

	_renderHeader(item, expanded) {

		// //console.log("item", item)
		return (
			<View style={expanded ? styles.SelectedHeaderContainer : styles.HeaderContainer}>
				<View style={styles.rowStyle}>
					<View style={{ flex: 1 }}>
						<Text style={styles.TextStyle}>
							{/* {item.content.Start} - {item.content.End} */}
							{item.content}
						</Text>
					</View>
					<View style={{ flex: 1,justifyContent:"center" }}>
						<Text style={styles.TextStyleName}>
							{item.title}
						</Text>
					</View>
				</View>

				{expanded ?
					<View>
						<View style={{ flex: 1, flexDirection: "row", paddingTop: 15 }}>
							<View style={{ flex: 0.3, }}>
								<Text style={styles.SubHeading}>
									Servers:
                        </Text>
							</View>
							<View style={{ flex: 0.3, borderBottomColor: "#FFFFFF", borderBottomWidth: 1, flexDirection: "row", justifyContent: "center" }}>
								<Text style={{ fontFamily: "Assistant-Bold", fontSize: 18, fontWeight: "bold", color: "white", alignSelf: "center" }}>
									{/* {item.content.Server} */}7
								</Text>
								
							</View>
							<View style={{ flex: 0.1, flexDirection: "row", justifyContent: "center" }}>
							<Icon name="caretdown" type="AntDesign" style={{fontSize:16,alignSelf:"center", color:"#FFFFFF", marginLeft:-50}}/>

							</View>
						</View>

						<View style={{ flex: 1, flexDirection: "row" }}>
							<View style={{ flex: 0.3, }}>
								<Text style={styles.SubHeading}>
									Start:
                        </Text>
							</View>
							<View style={{ flex: 0.3, borderBottomColor: "#FFFFFF", borderBottomWidth: 1, flexDirection: "row", justifyContent: "center" }}>
								<Text style={{ fontFamily: "Assistant-Bold", fontSize: 18, fontWeight: "bold", color: "white", alignSelf: "center" }}>
									{/* {item.content.Server} */}4
								</Text>

							</View>
							<View style={{ flex: 0.1, flexDirection: "row", justifyContent: "center" }}>
							<Icon name="caretdown" type="AntDesign" style={{fontSize:16,alignSelf:"center", color:"#FFFFFF", marginLeft:-50}}/>

							</View>

						</View>

						<View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
							<View style={{ flex: 0.3, }}>
								<Text style={styles.SubHeading}>
									End:
                        </Text>
							</View>
							<View style={{ flex: 0.3, borderBottomColor: "#FFFFFF", borderBottomWidth: 1, flexDirection: "row", justifyContent: "center" }}>
								<Text style={{ fontFamily: "Assistant-Bold", fontSize: 18, fontWeight: "bold", color: "white", alignSelf: "center" }}>
									{/* {item.content.Server} */}6
								</Text>
							</View>
							<View style={{ flex: 0.1, flexDirection: "row", justifyContent: "center" }}>
							<Icon name="caretdown" type="AntDesign" style={{fontSize:16,alignSelf:"center", color:"#FFFFFF", marginLeft:-50}}/>

							</View>
						</View>


					</View>
					:
					null
				}


				<View style={{flex:1, flexDirection: "row", paddingHorizontal:10 }}>
					<View style={{ flex: 0.19, paddingVertical: 10, justifyContent:"center"}}>
						<Text style={{ fontFamily: "Assistant-Bold", fontSize: 18, fontWeight: "bold", color: "white",}} numberOfLines={1}>Repeat:</Text></View>
					<View style={{ flex: 0.81, flexDirection: "row",justifyContent:"flex-start", paddingVertical: 10,}}>
						<WEEK_ALARMS />
					</View>
				</View>
			</View>

		);
	}

	_renderContent(item) {

	}

	renderUpdating = () => {
		//setTimeout(this.setState({updating: true}), 1000); 
		return (

			<View style={{
				flex: 1, justifyContent: 'center',
				backgroundColor: 'rgba(100, 100, 100, 0.5)'
				//backgroundColor: 'red'

			}}>
				<Thumbnail large style={{ alignSelf: "center" }} source={require("../../assets/images/chips.png")} />
			</View>

		)

	}
	render() {
		{
			this.state.updating ? setTimeout(function () {
				this.setState({ updating: false });
			}.bind(this), 3000) : null
		}
		return (
			<View style={styles.container}>
				<View style={styles.HeaderBarView}>
					<View style={styles.MainHeaderBarLine}>
						<Text style={styles.MainAndDeliveryText}>
							Main System
                            </Text>
					</View>
					<View style={styles.DeliveryHeaderBarLine}>
						<TouchableOpacity onPress={() => { this.props.navigation.navigate("ServerPercentage") }}>
							<Text style={[styles.MainAndDeliveryText, { fontWeight: "normal" }]}>
								Delivery
                            </Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.scrollview}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View>
							<Text style={styles.HeaderBarText}>
								Server Alarms
                                </Text>
							<Text style={styles.HeaderBarText}>
								Set time to turn on/off server
                                </Text>
						</View>
						<Accordion style={{ marginTop: 10 }}
							dataArray={dataArray}
							animation={true}
							expanded={true}
							renderHeader={this._renderHeader}
							renderContent={this._renderContent}
						/>

					</ScrollView>
					<TouchableOpacity style={styles.Button} onPress={this.buttonPressed}>
						<Thumbnail style={styles.ButtonImage} medium source={require("../../assets/images/add.png")} />

					</TouchableOpacity>

				</View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.updating}>
					{this.renderUpdating()}
				</Modal>
			</View>
		)
	}
}



