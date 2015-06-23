(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://biogeochemistry.herokuapp.com/bokeh-0.9.0.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://biogeochemistry.herokuapp.com/bokeh-0.9.0.js"

  var elt = document.getElementById("21e36e95-16fc-4bfa-8572-8ed7152c4fcc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '21e36e95-16fc-4bfa-8572-8ed7152c4fcc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "black"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.6}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "666da252-ed5f-45f1-bfb9-691054f47361"}, "type": "Circle", "id": "666da252-ed5f-45f1-bfb9-691054f47361"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "b9605328-e131-4cbd-9267-9074ffba83b5"}, "ticker": {"type": "BasicTicker", "id": "1f6cae46-afeb-44c6-8b21-7743312b1aa7"}, "id": "eb74f078-7d59-4055-bd0c-862a3d7c8757"}, "type": "LinearAxis", "id": "eb74f078-7d59-4055-bd0c-862a3d7c8757"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "66e5cfb5-d19f-4308-a236-4bd160fb5b7b"}, "type": "Circle", "id": "66e5cfb5-d19f-4308-a236-4bd160fb5b7b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "renderers": [], "names": [], "id": "7d36f9ae-0d57-4332-a18e-ef32a61d0c7e"}, "type": "LassoSelectTool", "id": "7d36f9ae-0d57-4332-a18e-ef32a61d0c7e"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "e3bba005-8f2e-48fd-bb99-714dc4e1f547"}, "type": "MultiLine", "id": "e3bba005-8f2e-48fd-bb99-714dc4e1f547"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "66e5cfb5-d19f-4308-a236-4bd160fb5b7b"}, "data_source": {"type": "ColumnDataSource", "id": "605ef8cb-8b84-4891-b5e7-ca6cd69a1ef6"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "e8a9dffb-d1f6-4cd5-bb1d-80af804d9880", "glyph": {"type": "Circle", "id": "666da252-ed5f-45f1-bfb9-691054f47361"}}, "type": "GlyphRenderer", "id": "e8a9dffb-d1f6-4cd5-bb1d-80af804d9880"}, {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e", "attributes": {"x_range": {"type": "Range1d", "id": "eec1c353-a33a-48db-a959-169ded84a2d4"}, "right": [], "tags": [], "y_range": {"type": "Range1d", "id": "2879cf7d-880a-426e-854a-2f6f919bb9ee"}, "renderers": [{"type": "LinearAxis", "id": "eb74f078-7d59-4055-bd0c-862a3d7c8757"}, {"type": "Grid", "id": "8b3f21b9-1196-49c1-9211-49e5b48d19af"}, {"type": "LinearAxis", "id": "6aaa7a49-bc3e-4f48-9426-d66e5fb85293"}, {"type": "Grid", "id": "6407977c-aa5c-4a78-9e4d-b7e9edbf4e8f"}, {"type": "Legend", "id": "c4598f9a-ca22-4661-b0c5-2a040eed7d77"}, {"type": "GlyphRenderer", "id": "9a0043e7-a291-4ac8-8cd9-6d3f95aa697e"}, {"type": "GlyphRenderer", "id": "ecd488f7-d073-4f84-86d3-6b77e3fe1f60"}, {"type": "GlyphRenderer", "id": "dc700127-9e6d-48b9-8656-36115df8b08d"}, {"type": "GlyphRenderer", "id": "e8a9dffb-d1f6-4cd5-bb1d-80af804d9880"}, {"type": "GlyphRenderer", "id": "fae47042-a412-40b2-a019-b88c2242e348"}, {"type": "GlyphRenderer", "id": "1540ac6f-1f00-4478-8237-57d4a79e029e"}, {"type": "GlyphRenderer", "id": "af95f29a-cfbd-4ef9-bc7f-faaf212a3f46"}, {"type": "GlyphRenderer", "id": "a4c923c7-ed13-413e-b182-255f0174e018"}, {"type": "GlyphRenderer", "id": "7e883310-fe94-427d-83ad-edfd1d8f206a"}, {"type": "GlyphRenderer", "id": "f4d9d50c-43c4-4f52-99ca-2463f1408f57"}, {"type": "GlyphRenderer", "id": "b3351436-4311-41cb-9bda-1bc9bcfbba75"}, {"type": "GlyphRenderer", "id": "e1e38442-d075-47b2-82b3-fd01850980ff"}, {"type": "GlyphRenderer", "id": "14c00a72-6636-4826-a2a7-3821125a26dc"}], "extra_y_ranges": {}, "extra_x_ranges": {}, "tool_events": {"type": "ToolEvents", "id": "cef14a35-5a8a-4a64-bb27-7c25472c22c5"}, "above": [], "doc": null, "id": "414785ee-6228-497e-a2f7-812f85cd956e", "tools": [{"type": "PreviewSaveTool", "id": "2423c356-a445-4952-86d4-a9011eff4035"}, {"type": "ResizeTool", "id": "11c76565-9336-4058-94fa-42b90be81371"}, {"type": "CrosshairTool", "id": "8c2c2906-d287-4f30-a68c-c96f34f54c81"}, {"type": "PanTool", "id": "ad4ffa72-067c-4b9f-ba8c-1d63e9d2e3ae"}, {"type": "WheelZoomTool", "id": "dabfde97-15fa-4909-8b23-ce6eecd5ea07"}, {"type": "BoxZoomTool", "id": "d4c049b9-d99b-499c-b93e-75daebfb8cd7"}, {"type": "ResetTool", "id": "021a3625-86d7-495f-b919-392e31b4585d"}, {"type": "BoxSelectTool", "id": "66f3c585-356f-4dac-bfac-9a72686c472f"}, {"type": "LassoSelectTool", "id": "7d36f9ae-0d57-4332-a18e-ef32a61d0c7e"}], "below": [{"type": "LinearAxis", "id": "eb74f078-7d59-4055-bd0c-862a3d7c8757"}], "left": [{"type": "LinearAxis", "id": "6aaa7a49-bc3e-4f48-9426-d66e5fb85293"}]}}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 12.561, 22.097, 42.36, 55.722], "x": [0.0, 1.9, 12.0, 15.9, 29.1, 43.2]}, "id": "f5a4e1cb-8127-4857-90d6-9b46e3840bdf"}, "type": "ColumnDataSource", "id": "f5a4e1cb-8127-4857-90d6-9b46e3840bdf"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [{"type": "GlyphRenderer", "id": "9a0043e7-a291-4ac8-8cd9-6d3f95aa697e"}, {"type": "GlyphRenderer", "id": "ecd488f7-d073-4f84-86d3-6b77e3fe1f60"}, {"type": "GlyphRenderer", "id": "dc700127-9e6d-48b9-8656-36115df8b08d"}, {"type": "GlyphRenderer", "id": "e8a9dffb-d1f6-4cd5-bb1d-80af804d9880"}, {"type": "GlyphRenderer", "id": "fae47042-a412-40b2-a019-b88c2242e348"}, {"type": "GlyphRenderer", "id": "1540ac6f-1f00-4478-8237-57d4a79e029e"}, {"type": "GlyphRenderer", "id": "af95f29a-cfbd-4ef9-bc7f-faaf212a3f46"}, {"type": "GlyphRenderer", "id": "a4c923c7-ed13-413e-b182-255f0174e018"}, {"type": "GlyphRenderer", "id": "7e883310-fe94-427d-83ad-edfd1d8f206a"}, {"type": "GlyphRenderer", "id": "f4d9d50c-43c4-4f52-99ca-2463f1408f57"}, {"type": "GlyphRenderer", "id": "b3351436-4311-41cb-9bda-1bc9bcfbba75"}, {"type": "GlyphRenderer", "id": "e1e38442-d075-47b2-82b3-fd01850980ff"}, {"type": "GlyphRenderer", "id": "14c00a72-6636-4826-a2a7-3821125a26dc"}], "names": [], "id": "66f3c585-356f-4dac-bfac-9a72686c472f"}, "type": "BoxSelectTool", "id": "66f3c585-356f-4dac-bfac-9a72686c472f"}, {"attributes": {"line_color": {"value": "green"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "2c917979-65a0-4cc3-adcf-887b9bd9f31e"}, "type": "MultiLine", "id": "2c917979-65a0-4cc3-adcf-887b9bd9f31e"}, {"attributes": {"line_color": {"value": "blue"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "blue"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.6}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "815c7eb8-f968-4fa1-a9e7-809cfd8c32c1"}, "type": "Circle", "id": "815c7eb8-f968-4fa1-a9e7-809cfd8c32c1"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "5d83967b-ec9a-4cd1-b9a2-0b33fb1ec744"}, "type": "MultiLine", "id": "5d83967b-ec9a-4cd1-b9a2-0b33fb1ec744"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "681abc0a-3830-4525-b561-fda29bae819b"}, "type": "Circle", "id": "681abc0a-3830-4525-b561-fda29bae819b"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"value": 30}, "x": {"value": 49}, "id": "b6a1c75e-2e19-49c0-8b32-57a2508dacb2", "size": {"units": "screen", "value": 15}}, "type": "Triangle", "id": "b6a1c75e-2e19-49c0-8b32-57a2508dacb2"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "681abc0a-3830-4525-b561-fda29bae819b"}, "data_source": {"type": "ColumnDataSource", "id": "fde00038-9500-4ecf-923e-d4b5e4e5e3c2"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "fae47042-a412-40b2-a019-b88c2242e348", "glyph": {"type": "Circle", "id": "815c7eb8-f968-4fa1-a9e7-809cfd8c32c1"}}, "type": "GlyphRenderer", "id": "fae47042-a412-40b2-a019-b88c2242e348"}, {"attributes": {"column_names": ["xs", "ys"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xs": [[0.0, 0.0], [1.8999999999999999, 1.8999999999999999], [12.0, 12.0], [15.9, 15.9], [29.100000000000001, 29.100000000000001], [43.200000000000003, 43.200000000000003]], "ys": [[491.89800000000002, 551.89800000000002], [260.0, 320.0], [134.02799999999999, 194.02799999999999], [105.68799999999999, 155.68799999999999], [39.066000000000003, 59.066000000000003], [-7.7739999999999991, 32.225999999999999]]}, "id": "a250938f-4e8d-4665-b85d-3745113be93f"}, "type": "ColumnDataSource", "id": "a250938f-4e8d-4665-b85d-3745113be93f"}, {"attributes": {"line_color": {"value": "blue"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "blue"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.6}, "y": {"value": 300}, "x": {"value": 49}, "id": "18dd4f0e-f974-4e82-a368-db519aee26b7", "size": {"units": "screen", "value": 15}}, "type": "Triangle", "id": "18dd4f0e-f974-4e82-a368-db519aee26b7"}, {"attributes": {"line_color": {"value": "green"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "green"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.6}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "221eb611-1d74-41cb-8774-6d3dcff015ac"}, "type": "Circle", "id": "221eb611-1d74-41cb-8774-6d3dcff015ac"}, {"attributes": {"column_names": [], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {}, "id": "f925b803-09d2-4347-82cc-69ef8a37ee77"}, "type": "ColumnDataSource", "id": "f925b803-09d2-4347-82cc-69ef8a37ee77"}, {"attributes": {"line_color": {"value": "blue"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "e9e4746c-d16d-494d-9087-e3265bbe139c"}, "type": "Line", "id": "e9e4746c-d16d-494d-9087-e3265bbe139c"}, {"attributes": {"column_names": ["xs", "ys"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xs": [[0.0, 0.0], [1.8999999999999999, 1.8999999999999999], [12.0, 12.0], [15.9, 15.9], [29.100000000000001, 29.100000000000001], [43.200000000000003, 43.200000000000003]], "ys": [[-30.0, 30.0], [-30.0, 30.0], [-17.439, 42.561], [-2.9029999999999987, 47.097000000000001], [12.359999999999999, 72.359999999999999], [5.7220000000000013, 105.72200000000001]]}, "id": "39f2a2ac-d1aa-4d0f-a1ce-c8fdfa7f37ed"}, "type": "ColumnDataSource", "id": "39f2a2ac-d1aa-4d0f-a1ce-c8fdfa7f37ed"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "id": "2423c356-a445-4952-86d4-a9011eff4035"}, "type": "PreviewSaveTool", "id": "2423c356-a445-4952-86d4-a9011eff4035"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "bde72d31-23f0-4d66-93dc-45bff415e8d7"}, "data_source": {"type": "ColumnDataSource", "id": "bbdff04a-6848-4b3d-a4de-a7598de79fa5"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "b3351436-4311-41cb-9bda-1bc9bcfbba75", "glyph": {"type": "Line", "id": "bc5dc811-7615-46d6-8e78-63de8847f855"}}, "type": "GlyphRenderer", "id": "b3351436-4311-41cb-9bda-1bc9bcfbba75"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "id": "11c76565-9336-4058-94fa-42b90be81371"}, "type": "ResizeTool", "id": "11c76565-9336-4058-94fa-42b90be81371"}, {"attributes": {"nonselection_glyph": {"type": "MultiLine", "id": "9ee0429e-ec05-4202-bd77-de4fd40f2852"}, "data_source": {"type": "ColumnDataSource", "id": "5bac0b75-d2a1-4e76-96a2-e56493a9fe5b"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "7e883310-fe94-427d-83ad-edfd1d8f206a", "glyph": {"type": "MultiLine", "id": "e3bba005-8f2e-48fd-bb99-714dc4e1f547"}}, "type": "GlyphRenderer", "id": "7e883310-fe94-427d-83ad-edfd1d8f206a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "id": "8c2c2906-d287-4f30-a68c-c96f34f54c81"}, "type": "CrosshairTool", "id": "8c2c2906-d287-4f30-a68c-c96f34f54c81"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y": {"field": "y"}, "line_dash": [4, 4], "x": {"field": "x"}, "id": "bde72d31-23f0-4d66-93dc-45bff415e8d7"}, "type": "Line", "id": "bde72d31-23f0-4d66-93dc-45bff415e8d7"}, {"attributes": {"nonselection_glyph": {"type": "Triangle", "id": "b6a1c75e-2e19-49c0-8b32-57a2508dacb2"}, "data_source": {"type": "ColumnDataSource", "id": "f925b803-09d2-4347-82cc-69ef8a37ee77"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "14c00a72-6636-4826-a2a7-3821125a26dc", "glyph": {"type": "Triangle", "id": "60b2da1a-0071-41f0-a653-da9eb6586118"}}, "type": "GlyphRenderer", "id": "14c00a72-6636-4826-a2a7-3821125a26dc"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "ad4ffa72-067c-4b9f-ba8c-1d63e9d2e3ae"}, "type": "PanTool", "id": "ad4ffa72-067c-4b9f-ba8c-1d63e9d2e3ae"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"value": 300}, "x": {"value": 49}, "id": "1d5a2964-5d69-4bb6-90a3-99f4963280f8", "size": {"units": "screen", "value": 15}}, "type": "Triangle", "id": "1d5a2964-5d69-4bb6-90a3-99f4963280f8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "dabfde97-15fa-4909-8b23-ce6eecd5ea07"}, "type": "WheelZoomTool", "id": "dabfde97-15fa-4909-8b23-ce6eecd5ea07"}, {"attributes": {"line_color": {"value": "green"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "line_dash": [4, 4], "y": {"field": "y"}, "x": {"field": "x"}, "id": "bc5dc811-7615-46d6-8e78-63de8847f855"}, "type": "Line", "id": "bc5dc811-7615-46d6-8e78-63de8847f855"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "d4c049b9-d99b-499c-b93e-75daebfb8cd7"}, "type": "BoxZoomTool", "id": "d4c049b9-d99b-499c-b93e-75daebfb8cd7"}, {"attributes": {"line_color": {"value": "blue"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "3c3d3b03-60b7-48b5-81b1-f6819bfa232f"}, "type": "MultiLine", "id": "3c3d3b03-60b7-48b5-81b1-f6819bfa232f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "id": "021a3625-86d7-495f-b919-392e31b4585d"}, "type": "ResetTool", "id": "021a3625-86d7-495f-b919-392e31b4585d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "42b6e048-f6e7-4714-92f2-1a86262402c8"}, "id": "6407977c-aa5c-4a78-9e4d-b7e9edbf4e8f"}, "type": "Grid", "id": "6407977c-aa5c-4a78-9e4d-b7e9edbf4e8f"}, {"attributes": {"column_names": [], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {}, "id": "13745144-0c27-4802-b2d0-7efc70c691df"}, "type": "ColumnDataSource", "id": "13745144-0c27-4802-b2d0-7efc70c691df"}, {"attributes": {"line_color": {"value": "green"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "green"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.6}, "y": {"value": 30}, "x": {"value": 49}, "id": "60b2da1a-0071-41f0-a653-da9eb6586118", "size": {"units": "screen", "value": 15}}, "type": "Triangle", "id": "60b2da1a-0071-41f0-a653-da9eb6586118"}, {"attributes": {"column_names": ["xs", "ys"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xs": [[0.0, 0.0], [1.0, 1.0], [1.8999999999999999, 1.8999999999999999], [4.9000000000000004, 4.9000000000000004], [6.9000000000000004, 6.9000000000000004], [8.0, 8.0], [9.0, 9.0], [12.0, 12.0], [13.9, 13.9], [15.0, 15.0], [15.9, 15.9], [19.0, 19.0], [21.0, 21.0], [22.0, 22.0], [22.899999999999999, 22.899999999999999], [26.0, 26.0], [28.0, 28.0], [29.100000000000001, 29.100000000000001], [30.0, 30.0], [32.899999999999999, 32.899999999999999], [35.0, 35.0], [36.0, 36.0], [37.0, 37.0], [40.0, 40.0], [42.0, 42.0], [43.200000000000003, 43.200000000000003], [44.100000000000001, 44.100000000000001], [47.0, 47.0], [48.899999999999999, 48.899999999999999]], "ys": [[394.97466669852378, 411.12533330147625], [308.92079484318282, 329.97920515681716], [280.26519664553837, 307.7748033544616], [224.40116440397455, 258.67883559602541], [200.45760147725457, 232.34239852274544], [189.80692904629529, 221.11307095370472], [199.74578968828084, 204.23421031171918], [161.37540296090515, 187.98459703909487], [158.54076151144224, 165.89923848855776], [142.57415238917889, 169.76584761082108], [125.08189559901813, 175.63810440098189], [126.25900317737819, 142.70099682262179], [105.03219019662818, 150.08780980337181], [121.5432813233284, 123.81671867667161], [109.98733159334414, 132.21266840665587], [88.72729993505925, 137.89270006494075], [82.213302939643739, 140.64669706035627], [81.42914663663386, 136.83085336336612], [85.418453663090816, 129.54154633690919], [74.857343617346658, 129.34265638265333], [99.131831244994487, 106.74816875500551], [96.491189046468534, 110.34881095353147], [98.830568453679561, 112.52943154632045], [96.327924866686857, 132.43207513331313], [96.724007582568532, 135.27599241743147], [111.91115126815897, 125.06884873184102], [101.64708311356965, 145.93291688643035], [126.06384316855551, 130.01615683144448], [126.2428269189095, 143.75717308109049]]}, "id": "5bac0b75-d2a1-4e76-96a2-e56493a9fe5b"}, "type": "ColumnDataSource", "id": "5bac0b75-d2a1-4e76-96a2-e56493a9fe5b"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 1.436392243716965, 2.865330321947753, 4.286266177572257, 5.6989840353176255, 7.103311581078663, 8.498464411645337, 9.88741766592797, 11.267429196185697, 12.640035025129505, 14.008174239348532, 15.371000044003145, 16.731140718645594, 18.090434272574164, 19.45263037320984, 20.828256367123345, 22.207460109021607, 23.604567062444524, 25.023933119641175, 26.474919391383466, 27.96742949790381, 29.512788275467717, 31.12508992399348, 32.82147279819483, 34.619184802542044, 36.546169751203564, 38.6257043605672, 40.89575162111194, 43.39640162293246, 46.18498250537433, 49.33091898936196], "x": [-0.0011458333333333333, 1.6333333333333335, 3.266666666666667, 4.8999999999999995, 6.533333333333334, 8.166666666666666, 9.799999999999999, 11.433333333333332, 13.066666666666668, 14.700000000000001, 16.333333333333332, 17.966666666666665, 19.599999999999998, 21.233333333333334, 22.866666666666664, 24.5, 26.133333333333336, 27.766666666666666, 29.400000000000002, 31.03333333333333, 32.666666666666664, 34.300000000000004, 35.93333333333333, 37.56666666666667, 39.199999999999996, 40.833333333333336, 42.46666666666667, 44.1, 45.73333333333333, 47.36666666666667, 49.0]}, "id": "bbdff04a-6848-4b3d-a4de-a7598de79fa5"}, "type": "ColumnDataSource", "id": "bbdff04a-6848-4b3d-a4de-a7598de79fa5"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "b2b1b103-b284-44ca-9fba-66dce277f99f"}, "type": "MultiLine", "id": "b2b1b103-b284-44ca-9fba-66dce277f99f"}, {"attributes": {"nonselection_glyph": {"type": "MultiLine", "id": "5d83967b-ec9a-4cd1-b9a2-0b33fb1ec744"}, "data_source": {"type": "ColumnDataSource", "id": "a250938f-4e8d-4665-b85d-3745113be93f"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "af95f29a-cfbd-4ef9-bc7f-faaf212a3f46", "glyph": {"type": "MultiLine", "id": "3c3d3b03-60b7-48b5-81b1-f6819bfa232f"}}, "type": "GlyphRenderer", "id": "af95f29a-cfbd-4ef9-bc7f-faaf212a3f46"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "50e60b64-35b9-4547-88ea-5c094e53a852"}, "data_source": {"type": "ColumnDataSource", "id": "0cd0a538-2dd3-47d7-aea6-e5caebe846fd"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "f4d9d50c-43c4-4f52-99ca-2463f1408f57", "glyph": {"type": "Line", "id": "05de180a-7a41-4dcd-8ca7-35e4dcc084cc"}}, "type": "GlyphRenderer", "id": "f4d9d50c-43c4-4f52-99ca-2463f1408f57"}, {"attributes": {"start": 0, "end": 600, "tags": [], "doc": null, "id": "2879cf7d-880a-426e-854a-2f6f919bb9ee"}, "type": "Range1d", "id": "2879cf7d-880a-426e-854a-2f6f919bb9ee"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 3.451980535176476, 6.88477788701106, 10.29792438317283, 13.690986156386742, 17.063834389381434, 20.417399435055213, 23.74941462209604, 27.064037991503344, 30.362010760673325, 33.64373981778823, 36.91468836727985, 40.178386037397544, 43.440986600558176, 46.70889253636243, 50.01309868266415, 53.32352554492906, 56.67199216587054, 60.077375862634746, 63.55831587946838, 67.13837884432746, 70.84604436044722, 74.71446184457311, 78.78259790769354, 83.09978446434603, 87.71769888259308, 92.70885933426669, 98.15259321968664, 104.15442675308135, 110.84302950884891, 118.393982881515], "x": [-0.0011458333333333333, 1.6333333333333335, 3.266666666666667, 4.8999999999999995, 6.533333333333334, 8.166666666666666, 9.799999999999999, 11.433333333333332, 13.066666666666668, 14.700000000000001, 16.333333333333332, 17.966666666666665, 19.599999999999998, 21.233333333333334, 22.866666666666664, 24.5, 26.133333333333336, 27.766666666666666, 29.400000000000002, 31.03333333333333, 32.666666666666664, 34.300000000000004, 35.93333333333333, 37.56666666666667, 39.199999999999996, 40.833333333333336, 42.46666666666667, 44.1, 45.73333333333333, 47.36666666666667, 49.0]}, "id": "ee5668e8-9c6d-4e06-84e9-ef7ec657af8e"}, "type": "ColumnDataSource", "id": "ee5668e8-9c6d-4e06-84e9-ef7ec657af8e"}, {"attributes": {"nonselection_glyph": {"type": "MultiLine", "id": "b2b1b103-b284-44ca-9fba-66dce277f99f"}, "data_source": {"type": "ColumnDataSource", "id": "39f2a2ac-d1aa-4d0f-a1ce-c8fdfa7f37ed"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "a4c923c7-ed13-413e-b182-255f0174e018", "glyph": {"type": "MultiLine", "id": "2c917979-65a0-4cc3-adcf-887b9bd9f31e"}}, "type": "GlyphRenderer", "id": "a4c923c7-ed13-413e-b182-255f0174e018"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "tags": [], "doc": null, "line_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f3271b3f-50f4-4204-9a7a-e5b0bfdb86e7"}, "type": "Line", "id": "f3271b3f-50f4-4204-9a7a-e5b0bfdb86e7"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y": {"field": "y"}, "line_dash": [4, 4], "x": {"field": "x"}, "id": "50e60b64-35b9-4547-88ea-5c094e53a852"}, "type": "Line", "id": "50e60b64-35b9-4547-88ea-5c094e53a852"}, {"attributes": {"nonselection_glyph": {"type": "Triangle", "id": "1d5a2964-5d69-4bb6-90a3-99f4963280f8"}, "data_source": {"type": "ColumnDataSource", "id": "13745144-0c27-4802-b2d0-7efc70c691df"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "e1e38442-d075-47b2-82b3-fd01850980ff", "glyph": {"type": "Triangle", "id": "18dd4f0e-f974-4e82-a368-db519aee26b7"}}, "type": "GlyphRenderer", "id": "e1e38442-d075-47b2-82b3-fd01850980ff"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "f3271b3f-50f4-4204-9a7a-e5b0bfdb86e7"}, "data_source": {"type": "ColumnDataSource", "id": "0f83cdf4-2cd2-4804-bc5d-3caea35f6b0e"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "9a0043e7-a291-4ac8-8cd9-6d3f95aa697e", "glyph": {"type": "Line", "id": "e9e4746c-d16d-494d-9087-e3265bbe139c"}}, "type": "GlyphRenderer", "id": "9a0043e7-a291-4ac8-8cd9-6d3f95aa697e"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [460.0158540029533, 319.8057279189082, 286.30670542742473, 256.4302476210174, 229.75371582649993, 205.90756970141314, 184.56849066952307, 165.45348380504726, 148.3143712381138, 132.93363668718422, 119.12029874020111, 106.70636336296229, 95.54396762407816, 85.50270527058316, 76.46736886048394, 68.33473178177648, 61.01630599546753, 54.43029149816968, 48.50444287563638, 43.173932785972085, 38.38036135121756, 34.070829413044514, 30.197251634301658, 26.715711040471803, 23.5859166992179, 20.770752719493963, 18.235870955907064, 15.949327253200133, 13.881231907201846, 12.003373222091586, 10.288765791748862], "x": [-0.0011458333333333333, 1.6333333333333335, 3.266666666666667, 4.8999999999999995, 6.533333333333334, 8.166666666666666, 9.799999999999999, 11.433333333333332, 13.066666666666668, 14.700000000000001, 16.333333333333332, 17.966666666666665, 19.599999999999998, 21.233333333333334, 22.866666666666664, 24.5, 26.133333333333336, 27.766666666666666, 29.400000000000002, 31.03333333333333, 32.666666666666664, 34.300000000000004, 35.93333333333333, 37.56666666666667, 39.199999999999996, 40.833333333333336, 42.46666666666667, 44.1, 45.73333333333333, 47.36666666666667, 49.0]}, "id": "0f83cdf4-2cd2-4804-bc5d-3caea35f6b0e"}, "type": "ColumnDataSource", "id": "0f83cdf4-2cd2-4804-bc5d-3caea35f6b0e"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "9ee0429e-ec05-4202-bd77-de4fd40f2852"}, "type": "MultiLine", "id": "9ee0429e-ec05-4202-bd77-de4fd40f2852"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "1f6cae46-afeb-44c6-8b21-7743312b1aa7"}, "id": "8b3f21b9-1196-49c1-9211-49e5b48d19af"}, "type": "Grid", "id": "8b3f21b9-1196-49c1-9211-49e5b48d19af"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [460.0158540029533, 323.25770845408465, 293.1914833144358, 266.7281720041902, 243.44470198288667, 222.97140409079458, 204.9858901045783, 189.20289842714328, 175.37840922961715, 163.29564744785753, 152.76403855798935, 143.62105173024213, 135.72235366147572, 128.94369187114134, 123.17626139684637, 118.34783046444063, 114.3398315403966, 111.10228366404021, 108.58181873827112, 106.73224866544047, 105.51874019554502, 104.91687377349174, 104.91171347887476, 105.49830894816535, 106.68570116356393, 108.48845160208705, 110.94473029017375, 114.10192047288677, 118.0356586602832, 122.8464027309405, 128.68274867326386], "x": [-0.0011458333333333333, 1.6333333333333335, 3.266666666666667, 4.8999999999999995, 6.533333333333334, 8.166666666666666, 9.799999999999999, 11.433333333333332, 13.066666666666668, 14.700000000000001, 16.333333333333332, 17.966666666666665, 19.599999999999998, 21.233333333333334, 22.866666666666664, 24.5, 26.133333333333336, 27.766666666666666, 29.400000000000002, 31.03333333333333, 32.666666666666664, 34.300000000000004, 35.93333333333333, 37.56666666666667, 39.199999999999996, 40.833333333333336, 42.46666666666667, 44.1, 45.73333333333333, 47.36666666666667, 49.0]}, "id": "328cf2f8-5f9f-47b6-a713-9e7110a16b13"}, "type": "ColumnDataSource", "id": "328cf2f8-5f9f-47b6-a713-9e7110a16b13"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "42b6e048-f6e7-4714-92f2-1a86262402c8", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "42b6e048-f6e7-4714-92f2-1a86262402c8"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "e73ced80-7ecf-419e-b2d8-cf4ecdd2db64"}, "type": "Circle", "id": "e73ced80-7ecf-419e-b2d8-cf4ecdd2db64"}, {"attributes": {"line_color": {"value": "green"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "0bcecb6c-08e6-427b-937e-66928d3c2a57"}, "type": "Line", "id": "0bcecb6c-08e6-427b-937e-66928d3c2a57"}, {"attributes": {"doc": null, "id": "5c1615a4-41e8-4a26-aac4-6256294ac2b6", "tags": []}, "type": "BasicTickFormatter", "id": "5c1615a4-41e8-4a26-aac4-6256294ac2b6"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "tags": [], "doc": null, "line_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0323294a-0b6b-4139-9abd-d1d54688ff3d"}, "type": "Line", "id": "0323294a-0b6b-4139-9abd-d1d54688ff3d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "legends": [["As5(aq) modeled", [{"type": "GlyphRenderer", "id": "9a0043e7-a291-4ac8-8cd9-6d3f95aa697e"}]], ["As3(aq) modeled", [{"type": "GlyphRenderer", "id": "ecd488f7-d073-4f84-86d3-6b77e3fe1f60"}]], ["TOT(As) modeled", [{"type": "GlyphRenderer", "id": "dc700127-9e6d-48b9-8656-36115df8b08d"}]], ["TOT(As) measured", [{"type": "GlyphRenderer", "id": "e8a9dffb-d1f6-4cd5-bb1d-80af804d9880"}]], ["As5(aq) measured", [{"type": "GlyphRenderer", "id": "fae47042-a412-40b2-a019-b88c2242e348"}]], ["As3(aq) measured", [{"type": "GlyphRenderer", "id": "1540ac6f-1f00-4478-8237-57d4a79e029e"}]], ["As5(s) modeled", [{"type": "GlyphRenderer", "id": "f4d9d50c-43c4-4f52-99ca-2463f1408f57"}]], ["As3(s) modeled", [{"type": "GlyphRenderer", "id": "b3351436-4311-41cb-9bda-1bc9bcfbba75"}]], ["As5(s) measured", [{"type": "GlyphRenderer", "id": "e1e38442-d075-47b2-82b3-fd01850980ff"}]], ["As3(s) measured", [{"type": "GlyphRenderer", "id": "14c00a72-6636-4826-a2a7-3821125a26dc"}]]], "tags": [], "doc": null, "id": "c4598f9a-ca22-4661-b0c5-2a040eed7d77"}, "type": "Legend", "id": "c4598f9a-ca22-4661-b0c5-2a040eed7d77"}, {"attributes": {"line_color": {"value": "blue"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "line_dash": [4, 4], "y": {"field": "y"}, "x": {"field": "x"}, "id": "05de180a-7a41-4dcd-8ca7-35e4dcc084cc"}, "type": "Line", "id": "05de180a-7a41-4dcd-8ca7-35e4dcc084cc"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "0323294a-0b6b-4139-9abd-d1d54688ff3d"}, "data_source": {"type": "ColumnDataSource", "id": "ee5668e8-9c6d-4e06-84e9-ef7ec657af8e"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "ecd488f7-d073-4f84-86d3-6b77e3fe1f60", "glyph": {"type": "Line", "id": "0bcecb6c-08e6-427b-937e-66928d3c2a57"}}, "type": "GlyphRenderer", "id": "ecd488f7-d073-4f84-86d3-6b77e3fe1f60"}, {"attributes": {"doc": null, "id": "b9605328-e131-4cbd-9267-9074ffba83b5", "tags": []}, "type": "BasicTickFormatter", "id": "b9605328-e131-4cbd-9267-9074ffba83b5"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [403.05, 319.45, 294.02, 241.54, 216.4, 205.46, 201.99, 174.68, 162.22, 156.17, 150.36, 134.48, 127.56, 122.68, 121.1, 113.31, 111.43, 109.13, 107.48, 102.1, 102.94, 103.42, 105.68, 114.38, 116.0, 118.49, 123.79, 128.04, 135.0], "x": [0.0, 1.0, 1.9, 4.9, 6.9, 8.0, 9.0, 12.0, 13.9, 15.0, 15.9, 19.0, 21.0, 22.0, 22.9, 26.0, 28.0, 29.1, 30.0, 32.9, 35.0, 36.0, 37.0, 40.0, 42.0, 43.2, 44.1, 47.0, 48.9]}, "id": "605ef8cb-8b84-4891-b5e7-ca6cd69a1ef6"}, "type": "ColumnDataSource", "id": "605ef8cb-8b84-4891-b5e7-ca6cd69a1ef6"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [521.898, 290.0, 164.028, 130.688, 49.066, 12.226], "x": [0.0, 1.9, 12.0, 15.9, 29.1, 43.2]}, "id": "fde00038-9500-4ecf-923e-d4b5e4e5e3c2"}, "type": "ColumnDataSource", "id": "fde00038-9500-4ecf-923e-d4b5e4e5e3c2"}, {"attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "999d87c5-5a19-4058-97e1-c4ea523cad4e"}, "type": "Line", "id": "999d87c5-5a19-4058-97e1-c4ea523cad4e"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "1f6cae46-afeb-44c6-8b21-7743312b1aa7", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "1f6cae46-afeb-44c6-8b21-7743312b1aa7"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "tags": [], "doc": null, "line_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "4178a8bf-4608-4fff-8bb2-9261b8a15526"}, "type": "Line", "id": "4178a8bf-4608-4fff-8bb2-9261b8a15526"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "e73ced80-7ecf-419e-b2d8-cf4ecdd2db64"}, "data_source": {"type": "ColumnDataSource", "id": "f5a4e1cb-8127-4857-90d6-9b46e3840bdf"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "1540ac6f-1f00-4478-8237-57d4a79e029e", "glyph": {"type": "Circle", "id": "221eb611-1d74-41cb-8774-6d3dcff015ac"}}, "type": "GlyphRenderer", "id": "1540ac6f-1f00-4478-8237-57d4a79e029e"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "4178a8bf-4608-4fff-8bb2-9261b8a15526"}, "data_source": {"type": "ColumnDataSource", "id": "328cf2f8-5f9f-47b6-a713-9e7110a16b13"}, "name": null, "tags": [], "doc": null, "selection_glyph": null, "id": "dc700127-9e6d-48b9-8656-36115df8b08d", "glyph": {"type": "Line", "id": "999d87c5-5a19-4058-97e1-c4ea523cad4e"}}, "type": "GlyphRenderer", "id": "dc700127-9e6d-48b9-8656-36115df8b08d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "414785ee-6228-497e-a2f7-812f85cd956e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "5c1615a4-41e8-4a26-aac4-6256294ac2b6"}, "ticker": {"type": "BasicTicker", "id": "42b6e048-f6e7-4714-92f2-1a86262402c8"}, "id": "6aaa7a49-bc3e-4f48-9426-d66e5fb85293"}, "type": "LinearAxis", "id": "6aaa7a49-bc3e-4f48-9426-d66e5fb85293"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "cef14a35-5a8a-4a64-bb27-7c25472c22c5"}, "type": "ToolEvents", "id": "cef14a35-5a8a-4a64-bb27-7c25472c22c5"}, {"attributes": {"start": 0, "end": 50, "tags": [], "doc": null, "id": "eec1c353-a33a-48db-a959-169ded84a2d4"}, "type": "Range1d", "id": "eec1c353-a33a-48db-a959-169ded84a2d4"}, {"attributes": {"column_names": ["x", "y"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 135.32175531479047, 163.95904548328167, 189.00141762068506, 210.872169784226, 229.94114013057157, 246.53150128627755, 260.92553971336923, 273.37001737890927, 284.0801733319557, 293.24364300951055, 301.02380403689216, 307.5623614391674, 312.98172968991804, 317.3869640875815, 320.8397692604979, 323.468564505885, 325.30900552755054, 326.41010448456115, 326.80868862258257, 326.5296873051576, 325.586194754648, 323.9790535979086, 321.6960755653805, 318.71097151725917, 314.9812364261601, 310.44542365397336, 305.01818683145075, 298.5837986557419, 290.98447428218464, 282.0021922375802], "x": [-0.0011458333333333333, 1.6333333333333335, 3.266666666666667, 4.8999999999999995, 6.533333333333334, 8.166666666666666, 9.799999999999999, 11.433333333333332, 13.066666666666668, 14.700000000000001, 16.333333333333332, 17.966666666666665, 19.599999999999998, 21.233333333333334, 22.866666666666664, 24.5, 26.133333333333336, 27.766666666666666, 29.400000000000002, 31.03333333333333, 32.666666666666664, 34.300000000000004, 35.93333333333333, 37.56666666666667, 39.199999999999996, 40.833333333333336, 42.46666666666667, 44.1, 45.73333333333333, 47.36666666666667, 49.0]}, "id": "0cd0a538-2dd3-47d7-aea6-e5caebe846fd"}, "type": "ColumnDataSource", "id": "0cd0a538-2dd3-47d7-aea6-e5caebe846fd"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("21e36e95-16fc-4bfa-8572-8ed7152c4fcc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("21e36e95-16fc-4bfa-8572-8ed7152c4fcc", all_models);
    });
  }

}(this));