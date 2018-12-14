import React from 'react'
import { Row,} from 'antd'
class PrimaryFooter extends React.Component {


    render() {
        return (
            <div>
                <Row style={{
                    height: 20,
                    bottom: 20,
                    fontSize:8,
                    lineHeight:"20px",
                }}
                    type="flex"
                    align="middle"
                    className="row_footer"
                >
                    <div >
                        <h1>Copyright © 2018 IFFrontEnd. All rights reserved.</h1>
                    </div>
                </Row>
                <Row style={{
                    height: 20,
                    lineHeight:"20px",
                    bottom: 0
                }}
                    type="flex"
                    align="middle"
                    className="row_footer"
                >
                    <div style={{
                        fontSize: "6px",
                    }}>
                        <h1 >create by IFFrontEnd 2018-2019</h1>
                    </div>
                </Row>
                <style jsx="true">
                    {`
				.primary_footer{
                    overflow: hidden;
					color: #fff;
                }
                .row_footer{
                    width: 100%;
                    position: fixed;
                    background: #4e4e4e;
                    text-align: center;
                    display: inline-block;
                    color:#fff;
                }
                .row_footer h1{
                    color:#e4e4e4;
                }
				
			`}
                </style>
            </div>
        )
    }

}


export default PrimaryFooter
