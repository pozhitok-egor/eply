package com.eply

import android.os.Bundle;
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen
import android.content.res.Configuration;

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "EPLY"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  //react-native-screens override
    override fun onCreate(savedInstanceState: Bundle?) {
      val currentNightMode = resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK
      when (currentNightMode) {
          Configuration.UI_MODE_NIGHT_NO -> setTheme(R.style.LightTheme)
          Configuration.UI_MODE_NIGHT_YES -> setTheme(R.style.DarkTheme)
          else -> setTheme(R.style.LightTheme)
      }

      SplashScreen.show(this)
      super.onCreate(savedInstanceState);
    }
}