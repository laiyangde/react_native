import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  PixelRatio
} from 'react-native'
import {styles as styles0,size,pixel} from '../util'
var datas = [{'title':'热门','url':require('../images/rankIcon01.png')},
             {'title':'新游','url':require('../images/rankIcon02.png')},
             {'title':'网游','url':require('../images/rankIcon03.png')},
             {'title':'小游戏','url':require('../images/rankIcon04.png')}]
export default class Navtab extends Component {
    
    navList(){
        return (datas.map((data,index)=>{   
                return(            
                <TouchableOpacity 
                    style={[styles.navItemWrap,this.props.currentPage==index ? styles.active :null]} 
                    key={index} 
                    onPress={()=>{this.props.goToPage(index)}}
                >
                    <View style={styles.navItem}>
                        <Image 
                            style={styles.navIcon}
                            source={data.url}
                        />
                        <Text style={styles.navName}>{data.title}</Text>
                    </View>
                </TouchableOpacity>                         
                )
            })
        )
    }
    render() {
        return(
            <View style={[styles.container,styles0.row]}>
                {this.navList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    height:size(87),
    backgroundColor:'#fff',
    borderBottomColor:'#ddd',
    borderBottomWidth:pixel,
  },
  navItemWrap:{
      flex:1, 
      justifyContent:'center',
  },
  navItem:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',      
      borderRightColor:'#ddd',
      borderRightWidth:1,
  },
  navIcon:{
      width:size(36),
      height:size(36),
      marginRight:size(13),
  },
  navName:{
      fontSize:size(26),
      color:'#565656',
  },
  active:{
      borderBottomWidth:pixel*4,
      borderBottomColor:'#eb4243'
  },
});


