package pe.com.app.common;

import java.math.BigDecimal;

import org.apache.commons.lang3.StringUtils;


public class GenericUtil {

	public static Long getDefaultLong(Object objValue) {
		try {
			if (objValue != null && StringUtils.isNotBlank(objValue.toString())
					&& !objValue.toString().equals("null"))
				return Long.valueOf(objValue.toString());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return null;
	}
	
	public static Long getDefaultLong(BigDecimal bigDecimalValue) {
		try {
			if (bigDecimalValue != null)
				return bigDecimalValue.longValue();
		} catch (Exception e) {
			e.printStackTrace();
			return 0L;
		}
		return 0L;
	}

	public static Long getDefaultLong(Object objValue, Long defaultValue) {
		try {
			if (objValue != null && StringUtils.isNotBlank(objValue.toString()))
				return Long.valueOf(objValue.toString());
		} catch (Exception e) {
			e.printStackTrace();
			return defaultValue;
		}
		return defaultValue;
	}
	
}
