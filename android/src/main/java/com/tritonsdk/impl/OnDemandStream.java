package com.tritonsdk.impl;

import java.io.Serializable;

public class OnDemandStream implements Serializable {

    private String url;
    private String title = "-";
    private String subTitle = "-";
    private String csegid = "0";

    public OnDemandStream() {

    }

    public OnDemandStream(String url, String title, String subTitle, String csegid) {
        this.url = url;
        this.title = title;
        this.subTitle = subTitle;
        this.csegid = csegid;
    }

    public String getURL() {
        return url;
    }
    public String getTitle() {
        return title;
    }
    public String getSubTitle() {
        return subTitle;
    }
    public String getCsegid() {
        return csegid;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }
    public void setCsegid(String csegid) {
        this.csegid = csegid;
    }

    public interface OnStreamClickListener {

        void onStreamClicked(OnDemandStream stream);
    }
}
