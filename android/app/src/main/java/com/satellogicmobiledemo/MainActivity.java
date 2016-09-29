package com.satellogicmobiledemo;

import com.facebook.react.ReactActivity;
import com.zyu.ReactNativeWheelPickerPackage;

import android.view.MotionEvent;
import android.os.Bundle;
import java.util.ArrayList;
import com.reactnative.photoview.EventCallback;
import com.reactnative.photoview.ViewList;
import com.zyu.WheelList;


public class MainActivity extends ReactActivity implements ViewList, WheelList {
    public ArrayList<EventCallback> photoViewsList = new ArrayList<EventCallback>();
    public ArrayList<EventCallback> wheelViewList = new ArrayList<EventCallback>();

    public void addPhotoView(EventCallback handler) {
        if (!photoViewsList.contains(handler)) {
            photoViewsList.add(handler);
        }
    }

    public void addWheelView(EventCallback handler) {
        if (!wheelViewList.contains(handler)) {
            wheelViewList.add(handler);
        }
    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        for (EventCallback photoView: photoViewsList) {
            photoView.getEvent(ev);
        }
        for (EventCallback wheelView: wheelViewList) {
            wheelView.getEvent(ev);
        }

        return false;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "satellogicMobileDemo";
    }
}
