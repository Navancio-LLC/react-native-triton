package com.tritonsdk.impl;

import java.io.Serializable;

public class OnDemandStream implements Serializable {

    private String url;

    public OnDemandStream() {

    }

    public OnDemandStream(String url) {
        this.url = url;
    }

    public String getURL() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public interface OnStreamClickListener {

        void onStreamClicked(OnDemandStream stream);
    }
}
