var size = 0;
var placement = 'point';
function categories_Rios_Apurimac_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'AC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Q':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QQ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,152,210,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,152,210,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,152,210,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,152,210,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,215,129,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Rios_Apurimac_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TIPO");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#1524ef";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("ROTULO") !== null) {
        labelText = String(feature.get("ROTULO"));
    }
    
var style = categories_Rios_Apurimac_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
