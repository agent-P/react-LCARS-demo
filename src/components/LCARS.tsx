import * as React from 'react';

const svgNS = "http://www.w3.org/2000/svg";

/**
 *  ES_XXX - LCARS element styles
 */
const ES_SHAPE      = 0x0000000F;   // Mask for ES_SHAPE_XXX styles
const ES_LABEL      = 0x000000F0;   // Mask for ES_LABEL_XXX styles
const ES_COLOR      = 0x0000FF00;   // Mask for EC_XXX styles
const ES_FONT       = 0x000F0000;   // Mask for EF_XXX styles
//const ES_BEHAVIOR   = 0x0F000000;   // Mask for EB_XXX styles
//const ES_CLASS      = 0xF0000000;   // Mask for class specific styles
//const ES_SELECTED   = 0x00000000;   // Element selected
//const ES_DISABLED   = 0x01000000;   // Element disabled
//const ES_SELDISED   = 0x00000000;   // Element selected and disabled
//const ES_STATIC     = 0x00100000;   // Element does not accept user input
//const ES_BLINKING   = 0x00200000;   // Element blinks
//const ES_MODAL      = 0x00400000;   // Element is always opaque
//const ES_SILENT     = 0x00800000;   // Element does not play a sound
const ES_NONE       = 0x00000000;   // Element does not have a style


/**
 *  ES_SHAPE_XXX - LCARS element shape orientation
 */
const ES_SHAPE_NW   = 0x00000000;   // Shape oriented to the north-west
const ES_SHAPE_SW   = 0x00000001;   // Shape oriented to the south-west
const ES_SHAPE_NE   = 0x00000002;   // Shape oriented to the north-east
const ES_SHAPE_SE   = 0x00000004;   // Shape oriented to the south-east
//const ES_OUTLINE    = 0x00000008;   // Outline

/**
 *  ES_LABEL_XXX - LCARS element label position
 */
const ES_LABEL_SE   = 0x00000010;   // Label in the south-east - the default for LCARS components
const ES_LABEL_S    = 0x00000020;   // Label in the south
const ES_LABEL_SW   = 0x00000030;   // Label in the south-west
const ES_LABEL_W    = 0x00000040;   // Label in the west
const ES_LABEL_NW   = 0x00000050;   // Label in the north-west
const ES_LABEL_N    = 0x00000060;   // Label in the north
const ES_LABEL_NE   = 0x00000070;   // Label in the north-east
const ES_LABEL_E    = 0x00000080;   // Label in the east
const ES_LABEL_C    = 0x00000090;   // Label in the center

/**
 *  ES_RECT_XXX - LCARS Rectangle/Button element styles
 */
const ES_RECT_RND   = 0x30000000;   // Rounded rectangle shape
const ES_RECT_RND_E = 0x10000000;   // Rounded rectangle shape in the east
const ES_RECT_RND_W = 0x20000000;   // Rounded rectangle shape in the west

/**
 *  EC_XXX - Colors by Name
 */
const EC_WHITE      = 0x00000000;   //
const EC_L_BLUE     = 0x00000400;   //
const EC_M_BLUE     = 0x00000800;   //
const EC_BLUE       = 0x00000C00;   //
const EC_D_BLUE     = 0x00001000;   //
const EC_YELLOW     = 0x00001400;   //
const EC_ORANGE     = 0x00001800;
const EC_RED        = 0x00001C00;

/**
 *  EF_XXX - Fonts
 */
const EF_NORMAL     = 0x00000000;   // The normal LCARS font
const EF_TITLE      = 0x00010000;   // The title font
const EF_SUBTITLE   = 0x00020000;   // The subtitle font
const EF_BUTTON     = 0x00030000;   // The default button text font
const EF_BODY       = 0x00040000;   // The default body text font
const EF_TINY       = 0x00050000;   // A tiny font

const FONT_TITLE_SIZE    = 60;
const FONT_SUBTITLE_SIZE = 32;
const FONT_BUTTON_SIZE   = 25;
const FONT_BODY_SIZE     = 20;
const FONT_TINY_SIZE     = 10;

const LCARS_FONT = "Arial Narrow"
const LCARS_FONT_MOBILE = "Avenir Next Condensed Medium"
const LCARS_CHAR_SIZE_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 26, 46, 63, 42, 105, 45, 20, 25, 25, 47, 39, 21, 34, 26, 36, 36, 28, 36, 36, 36, 36, 36, 36, 36, 36, 27, 27, 36, 35, 36, 35, 65, 42, 43, 42, 44, 35, 34, 43, 46, 25, 39, 40, 31, 59, 47, 43, 41, 43, 44, 39, 28, 44, 43, 65, 37, 39, 34, 37, 42, 37, 50, 37, 32, 43, 43, 39, 43, 40, 30, 42, 45, 23, 25, 39, 23, 67, 45, 41, 43, 42, 30, 40, 28, 45, 33, 52, 33, 36, 31, 39, 26, 39, 55];


/**
 * Keypad Class Styles
 */
const EKP_AUX_KEYS  = 0x40000000;

/**
 * Key pad constants
 */
const KP_BUTTON_X_OFFSET = 175;
const KP_BUTTON_Y_OFFSET = 100;
const KP_BUTTON_X_SPACE = 25;
const KP_BUTTON_Y_SPACE = 40;

const TEXT_Y_INSET = 10;
const TEXT_X_INSET = 20;

const LCARS_BTN_HEIGHT    = 60;
const LCARS_BTN_WIDTH     = 150;
const LCARS_BTN_SPACING   = 5;
const LCARS_SPACE         = 5;
const LCARS_CORNER_HEIGHT = 92;
const LCARS_CORNER_END_HEIGHT = 30;

const SHAPE_SUFFIX = "_shape";
const TEXT_SUFFIX = "_text";
const AUX_TEXT_SUFFIX = "_aux_text";
const ICON_SUFFIX = "_icon";

const DAYS = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const MONTHS = [
                "\x00",          /** substitution token to support parsing */
                "January",       /** MONTHS[1] = "January" */
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
                ];

const MONTHS_ABBREVIATED = [
                            "\x01",          /** substitution token to support parsing */
                            "Jan",           /** MONTHS_ABBREVIATED[1] = "Jan" */
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                            ];

const DAYS_OF_WEEK = [
                      "\x02",          /** substitution token to support parsing */
                      "Sunday",        /** DAYS_OF_WEEK[1] = "Sunday" */
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                      ];

const DAYS_OF_WEEK_ABBREVIATED = [
                                  "\x03",          /** substitution token to support parsing */
                                  "Sun",           /** DAYS_OF_WEEK_ABBREVIATED[1] = "Sunday" */
                                  "Mon",
                                  "Tue",
                                  "Wed",
                                  "Thu",
                                  "Fri",
                                  "Sat"
                                  ];


const BLINK_DURATION_ERROR = "0.5s";
const BLINK_DURATION_WARNING = "0.75s";

let lcarsFont = "";


/**
 * The base class for all of the non component specific functionality.
 *
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-17
 */
class LCARS {
    
    constructor() {
    }
    
    /**
     * Derive the LCARS color from the LCARS properties variable.
     * <p>
     * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
     * returns the color value for the color property. The eight (8) color options are:
     * <ul>
     * <li> white:       #CCDDFF
     * <li> light blue:  #5599FF
     * <li> medium blue: #3366FF
     * <li> blue:        #0011EE
     * <li> dark blue:   #000088
     * <li> yellow:      #CCA300
     * <li> orange:      #CC6600
     * <li> red:         #A30000
     * </ul>
     *
     * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
     * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
     */
    static getColor(properties: number) {
        var color = "";

        switch(properties & ES_COLOR) {
            case EC_WHITE:
                return "#CCDDFF";
            case EC_L_BLUE:
                return "#5599FF";
            case EC_M_BLUE:
                return "#3366FF";
            case EC_BLUE:
                return "#0011EE";
            case EC_D_BLUE:
                return "#000088";
            case EC_YELLOW:
                return "#CCA300";
            case EC_ORANGE:
                return "#CC6600";
            case EC_RED:
                return "#A30000";
            default:
                break;
        }
        
        return color;
    }
    
    /**
     * Derive the LCARS text color from the LCARS properties variable.
     * <p>
     * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
     * returns the text color value for the color property. The eight (8) color options are:
     * <ul>
     * <li> white:       #CCDDFF
     * <li> light blue:  #5599FF
     * <li> medium blue: #3366FF
     * <li> blue:        #0011EE
     * <li> dark blue:   #000088
     * <li> yellow:      #CCA300
     * <li> orange:      #CC6600
     * <li> red:         #A30000
     * </ul>
     *
     * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
     * @return the text color value for the color property specified in the LCARS <code>properties</code> paramenter.
     */
    static getTextColor(properties: number) {
        
        switch(properties & ES_COLOR) {
            case EC_BLUE:
            case EC_D_BLUE:
            case EC_RED:
                return "#CCDDFF";
            case EC_WHITE:
            case EC_YELLOW:
            case EC_ORANGE:
            case EC_L_BLUE:
            case EC_M_BLUE:
            default:
                return "#000000";
        }
    }
    
    /**
     * Simple setter for setting the LCARS font to the font specified by the
     * argument.
     *
     * @param font the font to set as the LCARS font
     */
    static setFont(font: string) {
        lcarsFont = font;
    }
    
    /**
     * Simple getter for getting the LCARS font.
     *
     * @return the font that was set as the LCARS font
     */
    static getFont() {
        return lcarsFont;
    }
    
    /**
     * Derive the LCARS font size from the LCARS properties variable.
     * <p>
     * Masks the <code>properties</code> paramenter for <code>ES_FONT</code>, and
     * returns the font size value for the font size property.
     *
     * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
     * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
     */
    static getLCARSFontSize(properties: number) {
        //console.log("font size property value: " + (properties & LCARS.ES_FONT));
        var fontSize = 0;
        switch(properties & ES_FONT) {
            case EF_TITLE:
                fontSize = FONT_TITLE_SIZE;
                break;
            case EF_SUBTITLE:
                fontSize =  FONT_SUBTITLE_SIZE;
                break;
            case EF_BUTTON:
                fontSize =  FONT_BUTTON_SIZE;
                break;
            case EF_TINY:
                fontSize =  FONT_TINY_SIZE
                break;
            case EF_BODY:
            default:
                fontSize =  FONT_BODY_SIZE;
                break;
        }
        //console.log("font size: " + fontSize);
        return fontSize;
    }
    
    /**
     * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
     *
     * @param {String} text The text to be rendered.
     * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
     * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
     */
    static getTextWidth(text: string, font: string) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        if(context != null) {
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        }

        return 0;
    }
    
    /**
     * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
     * Calls <code>LCARS.getTextWidth()</code> for each character of the String argument <code>text</code>,
     * and returns the sum of the length of the characters.
     *
     * @param {String} text The text to be rendered.
     * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
     * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
     */
    static getTextWidth2(text: string, font: string) {
        var width = 0;
        
        for (var i=0; i < text.length; i++) {
            width += LCARS.getTextWidth(text.charAt(i), font);
        }
        
        return width;
    }
    
    static getTextWidth3(text: string, fontSize: number) {
        let width = 0;
        let scaleFactor = fontSize/100;
        
        for(let i=0; i<text.length; i++) {
            width = width + LCARS_CHAR_SIZE_ARRAY[text.charCodeAt(i)];
        }
        
        return width * scaleFactor;
    }
    
    static get svgNS() { return svgNS; }
    static get ES_SHAPE() { return ES_SHAPE; }
    static get ES_LABEL() { return ES_LABEL; }
    static get ES_COLOR() { return ES_COLOR; }
    static get ES_FONT() { return ES_FONT; }
//    static get ES_BEHAVIOR() { return ES_BEHAVIOR; }
//    static get ES_CLASS() { return ES_CLASS; }
//    static get ES_SELECTED() { return ES_SELECTED; }
//    static get ES_DISABLED() { return ES_DISABLED; }
//    static get ES_SELDISED() { return ES_SELDISED; }
//    static get ES_STATIC() { return ES_STATIC; }
//    static get ES_BLINKING() { return ES_BLINKING; }
//    static get ES_MODAL() { return ES_MODAL; }
//    static get ES_SILENT() { return ES_SILENT; }
    static get ES_NONE() { return ES_NONE; }
    static get ES_SHAPE_NW() { return ES_SHAPE_NW; }
    static get ES_SHAPE_SW() { return ES_SHAPE_SW; }
    static get ES_SHAPE_NE() { return ES_SHAPE_NE; }
    static get ES_SHAPE_SE() { return ES_SHAPE_SE; }
//    static get ES_OUTLINE() { return ES_OUTLINE; }
    static get ES_LABEL_SE() { return ES_LABEL_SE; }
    static get ES_LABEL_S() { return ES_LABEL_S; }
    static get ES_LABEL_SW() { return ES_LABEL_SW; }
    static get ES_LABEL_W() { return ES_LABEL_W; }
    static get ES_LABEL_NW() { return ES_LABEL_NW; }
    static get ES_LABEL_N() { return ES_LABEL_N; }
    static get ES_LABEL_NE() { return ES_LABEL_NE; }
    static get ES_LABEL_E() { return ES_LABEL_E; }
    static get ES_LABEL_C() { return ES_LABEL_C; }
    static get ES_RECT_RND() { return ES_RECT_RND; }
    static get ES_RECT_RND_E() { return ES_RECT_RND_E; }
    static get ES_RECT_RND_W() { return ES_RECT_RND_W; }
    static get EC_WHITE() { return EC_WHITE; }
    static get EC_L_BLUE() { return EC_L_BLUE; }
    static get EC_M_BLUE() { return EC_M_BLUE; }
    static get EC_BLUE() { return EC_BLUE; }
    static get EC_D_BLUE() { return EC_D_BLUE; }
    static get EC_YELLOW() { return EC_YELLOW; }
    static get EC_ORANGE() { return EC_ORANGE; }
    static get EC_RED() { return EC_RED; }
    static get EF_NORMAL() { return EF_NORMAL; }
    static get EF_TITLE() { return EF_TITLE; }
    static get EF_SUBTITLE() { return EF_SUBTITLE; }
    static get EF_BUTTON() { return EF_BUTTON; }
    static get EF_BODY() { return EF_BODY; }
    static get EF_TINY() { return EF_TINY; }
    static get FONT_TITLE_SIZE() { return FONT_TITLE_SIZE; }
    static get FONT_SUBTITLE_SIZE() { return FONT_SUBTITLE_SIZE; }
    static get FONT_BUTTON_SIZE() { return FONT_BUTTON_SIZE; }
    static get FONT_BODY_SIZE() { return FONT_BODY_SIZE; }
    static get FONT_TINY_SIZE() { return FONT_TINY_SIZE; }
    static get LCARS_FONT() { return LCARS_FONT; }
    static get LCARS_FONT_MOBILE() { return LCARS_FONT_MOBILE; }
    static get EKP_AUX_KEYS() { return EKP_AUX_KEYS; }
    static get KP_BUTTON_X_OFFSET() { return KP_BUTTON_X_OFFSET; }
    static get KP_BUTTON_Y_OFFSET() { return KP_BUTTON_Y_OFFSET; }
    static get KP_BUTTON_X_SPACE() { return KP_BUTTON_X_SPACE; }
    static get KP_BUTTON_Y_SPACE() { return KP_BUTTON_Y_SPACE; }
    static get TEXT_Y_INSET() { return TEXT_Y_INSET; }
    static get TEXT_X_INSET() { return TEXT_X_INSET; }
    static get LCARS_BTN_HEIGHT() { return LCARS_BTN_HEIGHT; }
    static get LCARS_BTN_WIDTH() { return LCARS_BTN_WIDTH; }
    static get LCARS_BTN_SPACING() { return LCARS_BTN_SPACING; }
    static get LCARS_SPACE() { return LCARS_SPACE; }
    static get LCARS_CORNER_HEIGHT() { return LCARS_CORNER_HEIGHT; }
    static get LCARS_CORNER_END_HEIGHT() { return LCARS_CORNER_END_HEIGHT; }
    static get BLINK_DURATION_ERROR() { return BLINK_DURATION_ERROR; }
    static get BLINK_DURATION_WARNING() { return BLINK_DURATION_WARNING; }
    static get MONTHS() { return MONTHS; }
    static get MONTHS_ABBREVIATED() { return MONTHS_ABBREVIATED; }
    static get DAYS() { return DAYS; }
    static get DAYS_OF_WEEK() { return DAYS_OF_WEEK; }
    static get DAYS_OF_WEEK_ABBREVIATED() { return DAYS_OF_WEEK_ABBREVIATED; }
    static get SHAPE_SUFFIX() { return SHAPE_SUFFIX; }
    static get TEXT_SUFFIX() { return TEXT_SUFFIX; }
    static get AUX_TEXT_SUFFIX() { return AUX_TEXT_SUFFIX; }
    static get ICON_SUFFIX() { return ICON_SUFFIX; }

}

export default LCARS;