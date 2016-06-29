package pe.com.app.core.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.com.app.common.Pagination;
import pe.com.app.core.model.NacionalidadModel;
import pe.com.app.core.service.NacionalidadService;

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
	
}
