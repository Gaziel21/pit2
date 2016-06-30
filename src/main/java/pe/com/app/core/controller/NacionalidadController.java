package pe.com.app.core.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.com.app.common.ConstantMessage;
import pe.com.app.common.Constants;
import pe.com.app.common.Pagination;
import pe.com.app.core.model.NacionalidadModel;
import pe.com.app.core.service.NacionalidadService;
import pe.com.app.exception.BusinessException;

@Controller
@RequestMapping(value = "/nacionalidad")
public class NacionalidadController {

	@Resource
	private NacionalidadService nacionalidadService;

	@RequestMapping(value = "getAll")
    @ResponseBody
    public Map<String, Object> getAll(@ModelAttribute Pagination pagination, HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        List<NacionalidadModel> usuarios = nacionalidadService.getAll(pagination);
        map.put("data", usuarios);
        map.put("totalCount", pagination.getTotalCount());
        return map;
    }
	
	@RequestMapping(value = "saveOrUpdate")
	public @ResponseBody Map<String, Object> saveOrUpdate(@ModelAttribute NacionalidadModel t, 
			HttpServletRequest request, BindingResult result) {
		Map<String, Object> response = new HashMap<String, Object>();
		try {
			String mensaje = (t.getIdNacionalidad()!=null && t.getIdNacionalidad() != 0 ? ConstantMessage.UPDATE: ConstantMessage.SAVE);
			nacionalidadService.saveOrUpdate(t);
			response.put("data", t);
			response.put("success", true);
			response.put("message", mensaje);
		} catch (BusinessException e) {
			response.put("success", false);
			response.put("icon", Constants.ICON_ERROR);
			response.put("message", e.getMessage());
		}
		return response;
	}
	
	@RequestMapping(value = "edit/{id}")
	public @ResponseBody NacionalidadModel edit(@PathVariable(value="id") int id) {
		return nacionalidadService.get(id);
	}
	
	@RequestMapping(value = "delete/{id}")
	public @ResponseBody Map<String, Object> delete(@PathVariable(value="id") int id) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			nacionalidadService.delete(id);
			map.put("success", true);
		}catch (BusinessException e) {
			map.put("success", false);
			map.put("icon", Constants.ICON_ERROR);
			map.put("message", e.getMessage());
		}
		return map;
	}
	
}
