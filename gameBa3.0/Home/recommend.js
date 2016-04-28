'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Navigator,
    Linking,
} from 'react-native'

import {size24,size30,size100,size,size20} from '../util'
import Detail from '../Rank/detail'

export default class Recommend extends Component{    
    PressFunc(data){
        this.props.navigator.push({
            component: Detail,
            title: data.appName,
            passProps: {productId:data.productId},
            backButton:true
        })
    }
    renderApplist(){
        var applist = [];
        var dataSource = this.props.datas.appArray;
        var result = dataSource.map((data,index)=>{
               return( 
                   
                   <TouchableOpacity style={styles.appItem} key={index} onPress={()=>this.PressFunc(data)} activeOpacity={0.8}>
                        <Image 
                            source={{uri:data.icon}}
                            style={styles.icon}                            
                        />
                        <Text style={styles.appName} numberOfLines={1}>{data.productName} </Text>
                    </TouchableOpacity>
                   
               )
        })
        return result;
    }    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.recommend}>
                    <View style={styles.top}>
                        <Text style={styles.title}>{this.props.datas.title}</Text>
                        <Text style={styles.num}>共有<Text style={{color:'#e04142'}}>{this.props.datas.player}</Text>个玩家在玩</Text>
                    </View>
                    <ScrollView style={styles.appList} horizontal>
                        {this.renderApplist()}                        
                    </ScrollView>                    
                </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth:1,
    borderTopWidth:size20,
    borderBottomColor:'#ddd',
    borderTopColor:'#eee'
  },
  recommend:{
      backgroundColor:'#fff',
      padding:size30,
  },
  top:{
       borderLeftColor:'#eb4546',
       borderLeftWidth :6,
       height:size30,
       flexDirection:'row',
       alignItems:'center'
  },
  title:{
      marginLeft:size(18),
      flex:1,
      fontSize:size30,
      color:'#000',      
  },
  num:{
      flex:1,
      textAlign:'right'
  },
  appList:{
      marginTop:size24,
      flex:1,
      flexDirection:'row',
  },
  icon:{
      width:size100,
      height:size100,
  },
  appItem:{
      width:size100, 
      marginRight:size24,     
  },
  appName:{
      flex:1,
      textAlign:'center',
      marginTop:size(16),
      width:size(148),
      marginLeft:-size(24),
  }
});
