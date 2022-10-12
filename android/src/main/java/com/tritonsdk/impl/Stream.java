package com.tritonsdk.impl;

import java.io.Serializable;

public class Stream implements Serializable {

    private String title;
    private String description;
    private String tritonName;
    private String tritonMount;
    private int state;
    private String countryCode = "";
    private String csegid = "0";
    private boolean active;

    public Stream() {

    }

    public Stream(String title, String description, String tritonName, String tritonMount, String countryCode, String csegid) {
        this(title, description, tritonName, tritonMount, countryCode, csegid, false);
    }

    public Stream(String title, String description, String tritonName, String tritonMount, String countryCode, String csegid, boolean active) {
        this.title = title;
        this.description = description;
        this.tritonName = tritonName;
        this.tritonMount = tritonMount;
        this.countryCode = countryCode;
        this.csegid = csegid;
        this.active = active;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTritonName() {
        return tritonName;
    }

    public void setTritonName(String tritonName) {
        this.tritonName = tritonName;
    }

    public String getTritonMount() {
        return tritonMount;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getCsegid() { 
        return csegid; 
    }

    public void setTritonMount(String tritonMount) {
        this.tritonMount = tritonMount;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public interface OnStreamClickListener {

        void onStreamClicked(Stream stream);
    }
}
