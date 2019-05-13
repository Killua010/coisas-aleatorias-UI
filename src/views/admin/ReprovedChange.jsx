import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import GeneralService from '../../services/GeneralService';
import OrderService from '../../services/OrderService';
import swal from 'sweetalert';

import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import ModalInactiveProduct from '../../components/Modal/ModalInactiveProduct';
import {
  Card, 
  Row,
  Col,
  CardHeader,
  CardBody,
  Button,
  Table,
} from "reactstrap";
import ChangeService from '../../services/ChangeService';
import ModalChangeDercription from '../../components/Modal/ModalChangeDescription';

export default class ReprovedChange extends Component {

  constructor(props) {
    super(props);
    this.changeService = new ChangeService("changes");

    this.state = {
      changes: [],
      change:{
        itens: []
      },
      statusModal: false
    };

    this.getAll = this.getAll.bind(this);
    this.getAll();
  }


  async getAll(){
    await this.changeService.getAllByStatus("TROCAREPROVADA").then(val => {
      this.setState({
        changes: val
      })
    })
  }

  openCloseModal = (change) => {
    this.setState({
      change: change,
      statusModal: !this.state.statusModal
    })
  }

  render() {
    console.log(this.state.changes)
    return (
      <div className="content">

            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                <Row>
                  <Col sm="6">
                    <h4 className="title dark-color">Trocas reprovadas</h4>
                  </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table hover>
                    <thead>
                      <tr>
                        <th className="text-center">Código da troca</th>
                        <th className="text-center">Data da troca</th>
                      </tr>
                    </thead>
                    <tbody id="tableList">
                    { 
                      
                        this.state.changes.map((change, index) => {
                            return (
                              <tr key={index}>
                                <td className="text-center hover-point" onClick={() => this.openCloseModal(change)}>{change.id}</td>
                                <td className="text-center hover-point" onClick={() => this.openCloseModal(change)}>{change.creationDate}</td>
                              </tr>
                            )
                        })
                    }
                    </tbody>
                  </Table>
                </CardBody>
            </Card>
          </Col>
          <ModalChangeDercription
            change={this.state.change}
            statusModal={this.state.statusModal}
            modal={this.openCloseModal} 
            nextStep={this.nextStep}
            description={"Pedido enviado"}
          />
      </div>
    )
  }
}