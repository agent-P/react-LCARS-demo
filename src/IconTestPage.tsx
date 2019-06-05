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


class IconTestPage extends Component {

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

    // here is the important part
    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="iconTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Icon Testing"
        //vbWidth={2*1920} vbHeight={2*1200}
        //color={LCARS.EC_L_BLUE}
        //fontSize={LCARS.EF_SUBTITLE}
        >

        <LCARSButton 
          id="iconTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSText
          id="navIconDescription"
          label="Navigation"
          x={280} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="rightArrowIcon"
          icon={ICONS.RIGHT_ARROW_IN_CIRCLE}
          x={310} y={130}
          //enabled={false}
        />

        <LCARSIcon
          id="leftArrowIcon"
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          x={310} y={190}
          //enabled={false}
        />

        <LCARSText
          id="networkIconDescription"
          label="Networking"
          x={450} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="networkIcon"
          icon={ICONS.NETWORK_CONNECTION}
          x={490} y={130}
        />

        <LCARSIcon
          id="networkNegIcon"
          icon={ICONS.NETWORK_CONNECTION_NEGATIVE}
          x={490} y={190}
        />

        <LCARSText
          id="powerIconDescription"
          label="Power"
          x={630} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="powerButtonIcon"
          icon={ICONS.POWER_BUTTON_SVG}
          x={640} y={130}
        />

        <LCARSIcon
          id="batteryFullIcon"
          icon={ICONS.BATTERY_FULL}
          x={640} y={190}
        />

        <LCARSIcon
          id="batteryHalfIcon"
          icon={ICONS.BATTERY_HALF}
          x={640} y={250}
        />

        <LCARSIcon
          id="batteryEmptyIcon"
          icon={ICONS.BATTERY_EMPTY}
          x={640} y={310}
        />

        <LCARSIcon
          id="batteryOnACIcon"
          icon={ICONS.BATTERY_ON_AC}
          x={640} y={370}
        />

        <LCARSIcon
          id="batteryOnACNegIcon"
          icon={ICONS.BATTERY_ON_AC_NEGATIVE}
          x={640} y={430}
        />

        <LCARSText
          id="weatherIconDescription"
          label="Weather"
          x={750} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="weather_sun_rise"
          icon={ICONS.WEATHER_SUN_RISE}
          x={775} y={130}
          color={LCARS.EC_YELLOW}
        />

        <LCARSIcon
          id="weather_sun_set"
          icon={ICONS.WEATHER_SUN_SET}
          x={775} y={190}
          color={LCARS.EC_YELLOW}
        />

        <LCARSIcon
          id="weather_moon_rise"
          icon={ICONS.WEATHER_MOON_RISE}
          x={775} y={250}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_moon_set"
          icon={ICONS.WEATHER_MOON_SET}
          x={775} y={310}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_heat_warn"
          icon={ICONS.WEATHER_HEAT_WARNING}
          x={875} y={130}
          color={LCARS.EC_RED}
        />

        <LCARSIcon
          id="weather_clear_day"
          icon={ICONS.WEATHER_CLEAR_DAY}
          x={875} y={190}
          color={LCARS.EC_YELLOW}
        />

        <LCARSIcon
          id="weather_clear_night"
          icon={ICONS.WEATHER_CLEAR_NIGHT}
          x={875} y={250}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_clear_moon"
          icon={ICONS.WEATHER_CLEAR_MOON_NIGHT}
          x={875} y={310}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_part_cloud_day"
          icon={ICONS.WEATHER_PARTLY_CLOUDY_DAY}
          x={975} y={130}
          color={LCARS.EC_YELLOW}
        />

        <LCARSIcon
          id="weather_part_cloud_night"
          icon={ICONS.WEATHER_PARTLY_CLOUDY_NIGHT}
          x={975} y={190}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_rain_chance_day"
          icon={ICONS.WEATHER_RAIN_CHANCE_DAY}
          x={975} y={250}
          color={LCARS.EC_YELLOW}
        />

        <LCARSIcon
          id="weather_rain_chance_night"
          icon={ICONS.WEATHER_RAIN_CHANCE_NIGHT}
          x={975} y={310}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_rain"
          icon={ICONS.WEATHER_RAIN}
          x={1075} y={130}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_rain_heavy"
          icon={ICONS.WEATHER_RAIN_HEAVY}
          x={1075} y={190}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_rain_light"
          icon={ICONS.WEATHER_RAIN_LIGHT}
          x={1075} y={250}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_snow_chance_day"
          icon={ICONS.WEATHER_SNOW_CHANCE_DAY}
          x={975} y={370}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_snow_chance_night"
          icon={ICONS.WEATHER_SNOW_CHANCE_NIGHT}
          x={975} y={430}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSIcon
          id="weather_snow"
          icon={ICONS.WEATHER_SNOW}
          x={1175} y={130}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_snow_heavy"
          icon={ICONS.WEATHER_SNOW_HEAVY}
          x={1175} y={190}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_snow_rain"
          icon={ICONS.WEATHER_SNOW_RAIN}
          x={1175} y={250}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_hail"
          icon={ICONS.WEATHER_HAIL}
          x={1275} y={130}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_lightning"
          icon={ICONS.WEATHER_LIGHTNING}
          x={1275} y={190}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_rain_thunderstorm"
          icon={ICONS.WEATHER_RAIN_THUNDERSTORM}
          x={1275} y={250}
          color={LCARS.EC_ORANGE}
        />

        <LCARSIcon
          id="weather_wind"
          icon={ICONS.WEATHER_WIND}
          x={1375} y={130}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_wind_breezy"
          icon={ICONS.WEATHER_WIND_BREEZY}
          x={1375} y={190}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_wind_cloudy"
          icon={ICONS.WEATHER_WIND_CLOUDY}
          x={1375} y={250}
          color={LCARS.EC_WHITE}
        />

        <LCARSIcon
          id="weather_snow_blowing"
          icon={ICONS.WEATHER_SNOW_BLOWING}
          x={1375} y={310}
          color={LCARS.EC_WHITE}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

}

export default IconTestPage;
