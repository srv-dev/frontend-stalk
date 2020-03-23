if (self.CavalryLogger) { CavalryLogger.start_js(["GjQrB"]); }

__d("VideoPlayerFormatsMap",[],(function(a,b,c,d,e,f){e.exports={live_map:"inline",live_map_sidebar:"inline",live_map_listview:"inline",live_map_tooltip:"inline",live_map_tooltip_from_listview:"inline",live_map_tooltip_from_map:"inline",video_home_inline:"inline",inline:"inline",chained:"inline",page_live_video_module:"inline",chained_suggestion:"inline",embedded_video:"inline",embedded_video_preview:"inline",embedded_video_from_ufi:"inline",ufi_comment_attachment:"inline",media_collage:"inline",media_viewer:"inline",channel:"channel",watch:"watch",permalink:"permalink",snowlift:"snowlift",tv:"tv",watch_scroll:"watch_scroll",continue_watching_recommendation:"inline",tahoe:"tahoe",search_live_video_module:"inline",videohub_live:"inline",camera_post:"fb_stories",pages_cover:"inline",video_page_spotlight_unit:"inline",pages_cover_hover:"inline",pages_messaging_video:"inline",profile_overview:"inline",profile_cover:"inline",memory_leak_test:"inline",games_video_home_streamer_hub:"inline",games_video_live_recommendation:"inline",games_video_search_unit:"inline",games_video_streamer_unit:"inline",trivia_game_admin_dashboard:"misc",games_streamer_dashboard:"inline",games_video_clips_home:"inline",games_video_clips_home_immersive_player:"inline",ads_preview:"inline",discover:"inline",business_feed:"inline",sotto_consideration_page:"inline",series_card:"inline",video_list:"inline",video_home_thumbnail_preview:"inline",work_captions_review:"inline",live_pyml:"inline",serp_thumbnail_preview:"inline",linear_channel:"inline",events_cover:"inline",fundraiser_cover:"inline",video_wall:"inline",ads:null,animated_image_share:null,asset:null,aymt:null,ballot:null,biz_art:null,broadcast_request_attachment:null,candidate_videos:null,channel_tab_latest_videos_card:null,channel_tab_live_video_card:null,channel_tab_all_videos_card:null,channel_tab_playlists_card:null,channel_tab_series_card:null,channel_tab_series_card_continue_watch:null,corporate_card_application:null,dim_sum:null,embedded:null,embedded_page_plugin:null,entry_point:null,gameroom_live_video_hero_banner:null,gameroom_live_video_tab:null,gameroom_live_video_thumbnail:null,games_arena_hero:null,games_verse_destination:null,games_video_clips_home_top_clips:null,games_video_clips_home_my_clips:null,games_video_community_feed:null,games_video_home:null,games_video_home_hero:null,games_video_single_game:null,games_video_top_weekly_clips_streamer_page:null,games_video_highlighted_clips_streamer_page:null,games_video_social_plugin:null,games_video_hub:null,games_video_hub_redirect_notification:null,games_video_hub_redirect_unknown:null,games_video_qp_recommended_live:null,games_video_home_left_rail:null,games_video_home_see_all:null,games_video_home_streamer_hub_hero:null,group_live_video_module:null,goodwill_product_system:null,html5:null,insights:null,intern_crm_call_recording:null,intern_curation:null,intern_example:null,issues_module:null,live_beeper:null,live_control_panel:null,live_linear:null,live_map_tooltip_from_webgl:null,live_producer:null,live_rhc:null,live_video_broadcast:null,live_video_preview:null,live_msite:null,living_room:null,living_room_commentating:null,living_room_recap_fullscreen:null,living_room_recap_inline:null,lookback:null,messaging:null,messenger_thread:null,misc:null,mobile:null,movies_recommended_movies_qp:null,not_specified_please_fix:null,offers_detail:null,page_roles:null,pages_finch_main_video:null,pages_finch_thumbnail_video:null,pages_finch_trailer:null,pages_video_set:null,pages_timeline_pages_cover:null,pages_home_hero:null,video_page_video_list:null,people_portal:null,profile_video:null,profile_video_hovercard:null,profile_video_thumb:null,proton:null,report_flow:null,review:null,serp_videos_tab:null,slideshow:null,srt_review:null,topic_channel_living_room:null,topic_gaming:null,trailer_og_attachment:null,trailer_timeline_collections:null,trailer_timeline_unit:null,user_video_tab:null,video_copyright_preview:null,video_home_catalog:null,topic_sports:null,explore:null,video_home_channel:null,video_home_live_tab:null,watchlist:null,video_home_cricket:null,video_inline_chaining:null,videohub_featured:null,videohub_playlist:null,live_autoplay_watch_and_scroll:null,video_page_unspecified:null,spotlight_live:null,spotlight_featured:null,spotlight_popular:null,spotlight_unknown:null,videos_card:null,videos_tab:null,playlists_tab:null,playlists_card:null,playlist_page:null,redirected_watch_serp:null,shows_catalog:null,sotto_catalog:null,results:null,watch_history:null,serp_inline_player:null,music_videos_playlists_card:null,media_match_service:null}}),null);
__d("ViewportTrackingHelper",["DOMDimensions","ge","getElementPosition","getElementRect","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={isDescendantOf:function(a,b){if(a===b)return!0;while(a&&a.parentElement){if(a.parentElement===b)return!0;a=a.parentElement}return!1},isVisible:function(a,c){return g.isVisibleInDimension(b("getViewportDimensions")(),a,c)},isVisibleUnderBluebar:function(a,c){var d=b("ge")("pagelet_bluebar");return d==null?g.isVisible(a,c):g.isVisibleInDimension(b("getViewportDimensions")(),a,c,d.clientHeight)},isFullyVisibleInContainer:function(a,c){a=b("getElementRect")(a);c=b("getElementRect")(c);return c.top>=a.top&&c.bottom<=a.bottom&&c.left>=a.left&&c.right<=a.right},isVisibleInDimension:function(a,c,d,e){e===void 0&&(e=0);var f=b("getElementPosition")(c);c=b("DOMDimensions").getElementDimensions(c);if(!f.x&&!f.y&&!c.height&&!c.width)return!1;e=Math.max(f.y,e);f=Math.min(f.y+c.height,a.height);a=Math.min(c.height,d);return f-e>=a},getHeightIfVisible:function(a,c){var d=this.getHeightInViewport(a);a=b("DOMDimensions").getElementDimensions(a);a=Math.min(a.height,c);return d>=a?d:0},getHeightInViewport:function(a){var c=b("getElementPosition")(a);a=b("DOMDimensions").getElementDimensions(a);if(!c.x&&!c.y&&!a.x&&!a.y)return 0;var d=b("getViewportDimensions")().height,e=Math.max(c.y,0);c=Math.min(c.y+a.height,d);return c-e},getElementsInViewIgnoreHeight:function(a){var b=!1,c=[];for(var d=0;d<a.length;d++){var e=a[d];if(this.isVisible(e,0,null))c.push(e),b=!0;else if(b)break}return c}};e.exports=g}),null);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h="_spinner";a={getClicked:function(a){return b("DataStore").get(a,"clicked",!1)},register:function(a,c){var d=a.id;g[d]=b("Event").listen(a,"click",function(){c&&(b("CSS").hide(a),b("CSS").show(c)),b("DataStore").set(a,"clicked",!0)});c&&(g[d+h]=b("Event").listen(c,"click",function(){c&&b("CSS").hide(c),b("CSS").show(a),b("DataStore").set(a,"clicked",!1)}))},unregister:function(a){a=a.id;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove();a=a+h;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove()}};e.exports=a}),null);
__d("XVideoQualitySurveyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/quality_survey/",{videoid:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("VideoPlayButton",["AsyncRequest","CSS","EventListener","VideoDisplayTimePlayButton","XVideoQualitySurveyController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();this.$1=a;this.$2=c;d&&(this.$3=d.hiddenAfterFinish,this.$4=d.hiddenWhilePaused,this.$5=!!d.hiddenInFallback,this.$5=d.hiddenInFallback,this.$6=d.spherical);c=b("VideoDisplayTimePlayButton").getClicked(this.$2);b("VideoDisplayTimePlayButton").unregister(this.$2);a.addListener("beginPlayback",this.$7.bind(this));a.addListener("finishPlayback",this.$8.bind(this));a.addListener("pausePlayback",this.$9.bind(this));a.addListener("buffering",this.$10.bind(this));a.addListener("buffered",this.$11.bind(this));a.addListener("stateChange",this.$12.bind(this));a.addListener("playRequested",this.$13.bind(this));a.addListener("VideoChannelController/exitChannel",this.$14.bind(this));a.addListener("clickVideo",this.$15.bind(this));a.addListener("TahoeController/enterTahoe",this.$16.bind(this));b("EventListener").listen(this.$2,"click",this.$17.bind(this));d&&d.hiddenWhileJSLoading&&!d.hiddenWhileVideoLoading&&b("CSS").show(this.$2);c&&this.$17()}var c=a.prototype;c.$12=function(){this.$1.isState("fallback")&&(this.$5||this.$1.getIsInChannel()?b("CSS").hide(this.$2):b("CSS").show(this.$2))};c.$7=function(){b("CSS").hide(this.$2)};c.$9=function(){if(this.$4||this.$1.getSource()==="inline")return;b("CSS").show(this.$2)};c.$13=function(a){if(this.$1.isState("fallback")||a==="autoplay_initiated")return;b("CSS").hide(this.$2)};c.$14=function(){(this.$1.isState("paused")&&(!this.$4||this.$6)||this.$1.isState("finished")&&!this.$3)&&b("CSS").show(this.$2)};c.$16=function(){this.$1.isState("playing")||b("CSS").show(this.$2)};c.$8=function(){var a=this.$1.getOption("Looping","isLooping");this.$3||this.$1.getIsInChannel()||this.$1.getSource()==="tahoe"||a?b("CSS").hide(this.$2):b("CSS").show(this.$2);if(!this.$1.getIsInChannel()&&!this.$1.isAd()&&!this.$1.hasOption("WatchAndScroll","isActive")&&!this.$1.isMuted()&&this.$1.getSource()!=="messaging"){a=b("XVideoQualitySurveyController").getURIBuilder().setString("videoid",this.$1.getVideoID()).getURI();a=new(b("AsyncRequest"))().setURI(a);a.send()}};c.$10=function(){b("CSS").hide(this.$2)};c.$11=function(){b("CSS").hide(this.$2)};c.$17=function(){this.$1.clickVideo()};c.$15=function(){if(this.$1.isState("fallback"))return;b("CSS").hide(this.$2)};return a}();e.exports=a}),null);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(function(a,b,c,d,e,f){var g,h={storeRenderTime:function(a){var c=b("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers?(g||(g=b("performanceAbsoluteNow")))():Date.now();b("DataStore").set(a,"videos_rendering_instrumentation",c);return c},retrieveRenderTime:function(a){var c=b("DataStore").get(a,"videos_rendering_instrumentation",NaN);Number.isNaN(c)&&(c=h.storeRenderTime(a));return c}};e.exports=h}),null);