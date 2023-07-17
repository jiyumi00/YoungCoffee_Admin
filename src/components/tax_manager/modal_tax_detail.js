import React, { Component } from "react";
import { Button, Modal, CloseButton } from "react-bootstrap";

import WebServiceManager from "../../util/webservice_manager";
import Constant from "../../util/constant_variables";


//UserInfo 상세보기 모달 클래스
export default class ModalTaxDetail extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.item.id
        this.state = {
            // companyNoImageURI: '', //companyNoImageURI:사업자등록증 사진
            // cardImageURI: '' //cardImageURI:명함 사진
        }
    }
    approveButtonClicked = () => {
        alert('수정되었습니다.')
    }
    deleteButtonClicked = () => {
        alert('삭제되었습니다.')
    }
    componentDidMount() {
        // this.callGetCompanyImageAPI().then((response) => {
        //     this.setState({ companyNoImageURI: URL.createObjectURL(response) })
        // })
        // this.callGetcardImageAPI().then((response) => {
        //     this.setState({ cardImageURI: URL.createObjectURL(response) })
        // })
    }


    // //사업자등록증 사진을 가져오는 API
    // async callGetCompanyImageAPI() {
    //     let manager = new WebServiceManager(Constant.serviceURL + "/GetCompanyImage", "post");
    //     manager.addFormData("data", { userID: 28, passwd: "9999", id: this.id });//열람하고자 하는 id
    //     let response = await manager.start();
    //     if (response.ok) {
    //         return response.blob();
    //     }
    // }

    // //명함 사진을 가져오는 API
    // async callGetcardImageAPI() {
    //     let manager = new WebServiceManager(Constant.serviceURL + "/GetNamecardImage", "post");
    //     manager.addFormData("data", { userID: 28, passwd: "9999", id: this.id });//열람하고자 하는 id
    //     let response = await manager.start();
    //     if (response.ok) {
    //         return response.blob();
    //     }
    // }

    render() {
        const item = this.props.item;
        return (
            <div className="modal w-100 h-100" >

                <Modal.Dialog
                    size="lg"
                    centered>
                    <Modal.Header>
                        <Modal.Title>상세보기</Modal.Title>
                        <CloseButton onClick={this.props.hideButtonClicked} />
                    </Modal.Header>

                    <Modal.Body>
                        <div className="fleft"  >
                        <table className="w-100 background">
                            <tbody>
                                <tr>
                                    <th><p>이름</p></th>
                                    <td><p>{item.username}</p></td>
                                </tr>
                                <tr>
                                    <th><p>사업자번호</p></th>
                                    <td><p>{item.companyNo}</p></td>
                                </tr>
                                <tr>
                                    <th><p>전화번호</p></th>
                                    <td><p>{item.phone}</p></td>
                                </tr>
                                <tr>
                                    <th><p>주소</p></th>
                                    <td><p>{item.address}</p></td>
                                </tr>
                                <tr>
                                    <th><p>정산여부</p></th>
                                    <td><p>{item.validate}</p></td>
                                </tr>
                            </tbody>

                        </table>
                        </div>

                       
                    </Modal.Body>
                    <Modal.Footer>
                        {item.validate === 1 && <Button variant="primary" onClick={() => { this.approveButtonClicked() }}>승인</Button>}
                        <Button variant="primary" onClick={() => { this.approveButtonClicked() }}>수정</Button>
                        <Button variant="danger" onClick={() => { this.deleteButtonClicked() }}>삭제</Button>
                    </Modal.Footer>
                </Modal.Dialog>


            </div>
        )
    }
}