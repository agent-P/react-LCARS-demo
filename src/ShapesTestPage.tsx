import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSBasicScreen from './components/LCARSBasicScreen';
import LCARSIcon from './components/LCARSIcon';
import { Redirect } from 'react-router'
import LCARSShape from './components/LCARSShape';


class ShapesTestPage extends Component {

  state = {
    navigate: false,
    path: ""
  }

  protected LEFT: number;
  protected TOP: number;
  protected RIGHT: number;
  protected BOTTOM: number;

  protected width: number;
  protected height: number;

  constructor(props: any) {
    super(props);

    this.LEFT = 50;
    this.TOP = 5;
    this.RIGHT  = 50;
    this.BOTTOM = 20;

    this.width = 1920;
    this.height = 1200;

    this.handleMenuBackButtonClick = this.handleMenuBackButtonClick.bind(this);
  }
 
  render() {
    const navigate = this.state.navigate;
    const path = this.state.path;

    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="iconTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Shapes Testing"
        >

        <LCARSText 
          id="cornerDescriptionText"
          label="Corner Components"
          properties={ LCARS.EF_SUBTITLE }
          x={800} y={90}
        />

        <LCARSButton 
          id="shapesTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSCorner
          id = 'ULC'
          label = 'Upper Left'
          x={300}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          width={600}
          height={1}
          properties={LCARS.ES_SHAPE_NW | LCARS.EC_ORANGE}
          //enabled={false}
       />

        <LCARSCorner
          id = 'URC'
          label = 'Upper Right'
          x={900 + LCARS.LCARS_SPACE}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          width={600}
          height={1}
          properties={LCARS.ES_SHAPE_NE | LCARS.EC_ORANGE}
          //enabled={false}
       />

        <LCARSCorner
          id = 'LLC'
          label = 'Lower Left'
          x={300}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_BTN_HEIGHT + LCARS.LCARS_CORNER_HEIGHT + 3*LCARS.LCARS_SPACE}
          width={600}
          height={1}
          properties={LCARS.ES_SHAPE_SW | LCARS.EC_ORANGE}
          //enabled={false}
       />

        <LCARSCorner
          id = 'LRC'
          label = 'Lower Right'
          x={900 + LCARS.LCARS_SPACE}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_BTN_HEIGHT + LCARS.LCARS_CORNER_HEIGHT + 3*LCARS.LCARS_SPACE}
          width={600}
          height={1}
          properties={LCARS.ES_SHAPE_SE | LCARS.EC_ORANGE}
          //enabled={false}
       />

        <LCARSText 
          id="rectangleDescriptionText"
          label="Rectangle Components"
          properties={ LCARS.EF_SUBTITLE }
          x={300} y={this.TOP + 6*LCARS.LCARS_BTN_HEIGHT + 6*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="sizeOneRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={300} y={this.TOP + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSRectangle
          id="sizeTwoRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={300} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE}
          height={120}
          auxLabel="default width x 120"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSRectangle
          id="sizeThreeRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={300} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 9*LCARS.LCARS_SPACE + 120}
          height={120} width={120}
          auxLabel="120 x 120"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSRectangle
          id="sizeOneRoundRect"
          label="ES_RECT_RND"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND | LCARS.EF_BODY}
          x={600} y={this.TOP + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSRectangle
          id="sizeOneRoundRectRndE"
          label="ES_RECT_RND_E"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND_E | LCARS.EF_BODY}
          x={600} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSRectangle
          id="sizeOneRoundRectRndW"
          label="ES_RECT_RND_W"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND_W | LCARS.EF_BODY}
          x={600} y={this.TOP + 9*LCARS.LCARS_BTN_HEIGHT + 9*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
        />

        <LCARSText 
          id="disabledShapesDescriptionText"
          label="Disabled Shape Components"
          properties={ LCARS.EF_SUBTITLE }
          x={900} y={this.TOP + 6*LCARS.LCARS_BTN_HEIGHT + 6*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="sizeOneRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={900} y={this.TOP + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSRectangle
          id="sizeTwoRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={900} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE}
          height={120}
          auxLabel="default width x 120"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSRectangle
          id="sizeThreeRect"
          label="Rectangle"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY}
          x={900} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 9*LCARS.LCARS_SPACE + 120}
          height={120} width={120}
          auxLabel="120 x 120"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSRectangle
          id="sizeOneRoundRect"
          label="ES_RECT_RND"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND | LCARS.EF_BODY}
          x={1200} y={this.TOP + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSRectangle
          id="sizeOneRoundRectRndE"
          label="ES_RECT_RND_E"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND_E | LCARS.EF_BODY}
          x={1200} y={this.TOP + 8*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSRectangle
          id="sizeOneRoundRectRndW"
          label="ES_RECT_RND_W"
          properties={LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND_W | LCARS.EF_BODY}
          x={1200} y={this.TOP + 9*LCARS.LCARS_BTN_HEIGHT + 9*LCARS.LCARS_SPACE}
          auxLabel="default size"
          auxLabelProperties={LCARS.ES_LABEL_SW | LCARS.EC_BLUE | LCARS.EF_BODY}
          enabled={false}
        />

        <LCARSCorner
          id = 'disabledULC'
          label = 'Upper Left'
          x={1200}
          y={700}
          width={600}
          height={1}
          properties={LCARS.ES_SHAPE_NW | LCARS.EC_ORANGE}
          enabled={false}
       />

        <LCARSText 
          id="labelLocationsDescriptionText"
          label="Component Label Locations"
          properties={ LCARS.EF_SUBTITLE }
          x={300} y={800}
        />

        <LCARSRectangle
          id="nwRect"
          label="Northwest"
          properties={LCARS.ES_LABEL_NW | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300} y={800 + 1*LCARS.LCARS_BTN_HEIGHT + 1*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="wRect"
          label="West"
          properties={LCARS.ES_LABEL_W | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300} y={800 + 2*LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="swRect"
          label="Southwest"
          properties={LCARS.ES_LABEL_SW | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300} y={800 + 3*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="nRect"
          label="North"
          properties={LCARS.ES_LABEL_N | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 1*LCARS.LCARS_BTN_WIDTH + 1*LCARS.LCARS_BTN_SPACING}
          y={800 + 1*LCARS.LCARS_BTN_HEIGHT + 1*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="cRect"
          label="Center"
          properties={LCARS.ES_LABEL_C | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 1*LCARS.LCARS_BTN_WIDTH + 1*LCARS.LCARS_BTN_SPACING}
          y={800 + 2*LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="sRect"
          label="South"
          properties={LCARS.ES_LABEL_S | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 1*LCARS.LCARS_BTN_WIDTH + 1*LCARS.LCARS_BTN_SPACING}
          y={800 + 3*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="neRect"
          label="Northeast"
          properties={LCARS.ES_LABEL_NE | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 2*LCARS.LCARS_BTN_WIDTH + 2*LCARS.LCARS_BTN_SPACING}
          y={800 + 1*LCARS.LCARS_BTN_HEIGHT + 1*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="eRect"
          label="East"
          properties={LCARS.ES_LABEL_E | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 2*LCARS.LCARS_BTN_WIDTH + 2*LCARS.LCARS_BTN_SPACING}
          y={800 + 2*LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="seRect"
          label="Southeast"
          properties={LCARS.ES_LABEL_SE | LCARS.EF_BODY | LCARS.ES_RECT_RND}
          x={300 + 2*LCARS.LCARS_BTN_WIDTH + 2*LCARS.LCARS_BTN_SPACING}
          y={800 + 3*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
        />

        <LCARSText 
          id="labelShapesDescriptionText"
          label="Arbitrary Shape Components"
          properties={ LCARS.EF_SUBTITLE }
          x={900} y={850}
        />

        <LCARSShape
          id="testHeartShape"
          label="Heart"
          width={130} height={107}
          scale="0.5"
          properties={LCARS.ES_LABEL_C}
          path="M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9
          C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z"
          x={900} y={900}
        />

        <LCARSShape
          id="testHeartDisabledShape"
          label="Heart Disabled"
          width={130} height={107}
          scale="0.5"
          properties={LCARS.ES_LABEL_C | LCARS.EF_BODY}
          path="M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9
          C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z"
          x={1050} y={900}
          enabled={false}
        />

<LCARSShape
          id="testShape"
          label="Cross"
          width={120} height={107}
          scale="23.0"
          properties={LCARS.ES_LABEL_C}
          path="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
          x={1200} y={900}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

}

export default ShapesTestPage;
