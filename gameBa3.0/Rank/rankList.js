import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import {styles as styles0,size,pixel} from '../util'


export default class RankList extends Component{    
	rankNum(index){
		if(index<3){
			switch(index){
				case 0:
				return(<Image style={styles.rankNumImg} source={require('../images/rankGold.png')} />)
				break;
				case 1:
				return(<Image style={styles.rankNumImg} source={require('../images/rankSilver.png')} />)
				break;
				case 2:
				return(<Image style={styles.rankNumImg} source={require('../images/rankCopper.png')} />)
				break;
				default:
				return false;
			}
		}else{
			return(
				<Text style={styles.rankNumText}>{index+1}</Text>
			)
		}
	}
	renderFunc(){
		return(
			this.props.datas.map((data,index)=>{
				return(
					<View style={styles.rankList} key={index}>
						<View style={styles.rankNum}>
							{this.rankNum(index)}
						</View>
						<TouchableOpacity style={styles.rankContent}>							
							<Image
								style={styles.appIcon}
								source={{uri:data.icon}}
							/>
							<View style={styles.appInfo}>
								<Text style={styles.appName} numberOfLines={1}>{data.productName}</Text>
								<View style={styles.appDetail}>
									<Text style={styles.appDetailText}>{data.productType} | {data.size} </Text>
									<View style={[styles.hasGifts,{opacity:data.hasGifts}]}><Text style={{color:'#fff',fontSize:size(22)}}>领礼包</Text></View>
								</View>
								<Text style={styles.appDes} numberOfLines={1}>{data.des}</Text>
							</View>							
						</TouchableOpacity>
						<TouchableOpacity style={styles.appDownload}>
							<Image 
								style={styles.appDownloadIcon}
								source={require('../images/downloadIconRed.png')}
							/>
							<Text style={styles.appDownloadText}>安装</Text>
						</TouchableOpacity>
					</View>
				)
			 })
		)
	}
	render(){
		return(
			<View style={styles.rankWrap}>
				{this.renderFunc()}
			</View>
		)
	}
}


const styles = StyleSheet.create({

  rankWrap:{
	  paddingHorizontal:size(20),
	  backgroundColor:'#fff',
	  paddingBottom:size(30),
  },
  rankList:{
	  height:size(166),	  
	  paddingVertical:size(30),
	  backgroundColor:'#fff',
	  flexDirection:'row',
	  alignItems:'center',
	  borderBottomColor:'#ddd',
	  borderBottomWidth:pixel,
  },
  rankNum:{
	  width:size(65),
  },
  rankNumImg:{
	  width:size(44),
	  height:size(44),
  },
  rankNumText:{
	  width:size(44),
	  height:size(44),
	  textAlign:'center',
	  fontSize:size(30),
	  color:'#595959',
	  fontStyle:'italic',
  },
  rankContent:{
	  flex:1,
	  flexDirection:'row',
  },
  appIcon:{
	  width:size(106),
	  height:size(106),
	  marginRight:size(20),
	  borderRadius:size(10),
  },
  appDownload:{
	  width:size(100),
	  alignItems:'center',
  },
  appDownloadIcon:{
	  width:size(60),
	  height:size(60),
	  marginBottom:size(10),
  },
  appInfo:{
	  flex:1,  
  },
  appDownloadText:{
	  color:'#df3031',
	  fontSize:size(22),
  },
  appName:{
	  fontSize:size(28),
	  color:'#000',
  },
  appDetail:{
	  flexDirection:'row'
  },
  appDetailText:{
	  fontSize:size(24),
	  color:'#aaa',
  },
  hasGifts:{
	  height:size(28),
	  width:size(76),
	  backgroundColor:'#eb4243',
	  borderRadius:2,
	  justifyContent:'center',
	  alignItems:'center',
  },
  
});