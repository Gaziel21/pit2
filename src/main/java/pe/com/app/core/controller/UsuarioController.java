package pe.com.app.core.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.com.app.core.model.UsuarioModel;
import pe.com.app.core.service.UsuarioService;

@Controller
@RequestMapping(value = "/usuario")
public class UsuarioController {

	@Resource
	private UsuarioService usuarioService;

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "getAll")
    @ResponseBody
    public Map<String, Object> getAll(HttpServletRequest request) {
        Map<String, Object> data = new HashMap();
        List<UsuarioModel> usuarios = usuarioService.getAll();
        data.put("data", usuarios);
        return data;
    }
	
	
	@RequestMapping(value="pdf")
	public void getPdf(HttpServletRequest request, HttpServletResponse response){
		try {
			String url="C:\\cua_ubigeo.pdf";
			File pdfFile = new File(url);
			response.setContentType("application/pdf");
			response.addHeader("Content-disposition", "inline; filename=reporte.pdf");
//			response.setHeader("Content-disposition", "inline; filename=reporte.pdf");
			response.setHeader("Cache-Control", "max-age=30");
			response.setHeader("Pragma", "No-cache");
			response.setDateHeader("Expires", 0);
			response.setContentLength((int) pdfFile.length());
			FileInputStream fileInputStream = new FileInputStream(pdfFile);
			OutputStream responseOutputStream = response.getOutputStream();
			int bytes;
			while ((bytes = fileInputStream.read()) != -1) {
				responseOutputStream.write(bytes);
			}
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
}
