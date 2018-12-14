import React from 'react'
import { Row, } from 'antd'
class PrimaryList extends React.Component {


    render() {
        const {
            listData,
            listTitle
        } = this.props;
        return (
            <div className="primary_list">
                <h1 className="list_title">
                    {listTitle}
                </h1>
                <ul className="list_content">{
                    listData.length > 0 ?
                        listData.map((item, idx) => {
                            return <Row key={idx}>
                                <li  className="primary_list_item">
                                    <span></span><a target="blank"  href={item.url}>{item.name}</a>
                                </li>
                            </Row>
                        }) : ""
                }

                </ul>
                <style jsx="true">
                    {`
                        .primary_list{
                            // max-width:350px;
                            padding: 15px;
                        }
                        .list_title{
                            font-size:16px
                        }
                        .list_content{
                            background:#efefef;
                            color:#4e4e4e;
                        }
                        .list_content li{
                            padding: 5px;
                            
                        }
                        a{
                            color:#8e8e8e
                        }
                        a:hover{
                            color:#000;
                        }
                        a:focus{
                            text-decoration: none;
                        }
                        
			        `}
                </style>
            </div>
        )
    }

}


export default PrimaryList
