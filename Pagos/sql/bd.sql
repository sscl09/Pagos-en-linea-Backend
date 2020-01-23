
--
-- Tabla forma de pago
--

CREATE SEQUENCE seqFormaPago;

CREATE TABLE formaPago(
	formaPagoId 	integer 			default nextval('seqFormaPago'),
 	formaPago       varchar (40) 		NOT NULL, 
	descripcion		text				NOT NULL,
	CONSTRAINT PKFP PRIMARY KEY (formaPagoId)
);


 --
 -- Tabla estado de curso 
 --

 CREATE SEQUENCE seqEstadoCurso;

 CREATE TABLE estadoCurso(
 	estadoCursoId 		integer				default nextval('seqEstadoCurso'),
 	nombre 				varchar (40) 		NOT NULL,
 	descripcion 		text 				NOT NULL,
 	CONSTRAINT PKEC PRIMARY KEY (estadoCursoId)
);


--
-- Tabla factura
--
CREATE SEQUENCE seqFactura;

CREATE TABLE factura(
	facturaId		integer 		default nextval('seqFactura'),
	factura 		numeric(4,2)		NOT NULL,
	CONSTRAINT PKF PRIMARY KEY (facturaId)
);


--
-- Tabla curso
--

CREATE SEQUENCE seqCurso;

CREATE TABLE curso(
	cursoId 			integer			default nextval('seqCurso'),
	nombre 				varchar(40)		NOT NULL,
	precio 				numeric(10,2)	NOT NULL,
	duracionSemanas 	integer			NOT NULL,
	fechaInicio 		date			NOT NULL,
	fechaFin 			date 			NOT NULL,
	CONSTRAINT PKC PRIMARY KEY (cursoId)
);


--
-- Tabla perfil de usuario
--
CREATE SEQUENCE seqPerfilUsuario;

CREATE TABLE perfilUsuario(
	perfilUsuarioId 		integer				default nextval ('seqPerfilUsuario'),
	perfilUsuario 			varchar (40)		NOT NULL,
	descripcion 			text 				NOT NULL,
	porcientoDescuento 		integer				NOT NULL,
	CONSTRAINT PKPU PRIMARY KEY (perfilUsuarioId)
);



-- 
-- Tabla tipo usuario
--

CREATE SEQUENCE seqTipoUsuario;

CREATE TABLE tipoUsuario(
	tipoUsuarioId 		integer			default nextval ('seqTipoUsuario'),
	tipoUsuario 		varchar(40)		NOT NULL,
	descripcion 		text 			NOT NULL,
	CONSTRAINT PKTU PRIMARY KEY (tipoUsuarioId)
);


-- 
-- Tabla Usuario 
--

CREATE SEQUENCE seqUsuario;

CREATE TABLE usuario(
	usuarioId 			integer 		default nextval ('seqUsuario'),
	nombre 				varchar(40) 	NOT NULL,
	apPaterno 			varchar(40) 	NOT NULL,
	apMaterno 			varchar(40)		NULL,
	correoElectronico 	varchar(40)		NOT NULL,
	contrasenia 		varchar(20)		NOT NULL,
	telefono 			varchar(10)		NOT NULL,
	rfc 				varchar(13)		NOT NULL,
	fechaRegistro 		date 			NOT NULL,
	fechaNacimiento 	date 			NOT NULL,
	sexo 				varchar(10)		NOT NULL,
	tipoUsuarioId 		integer			NOT NULL,
	perfilUsuarioId 	integer 		NOT NULL,

	CONSTRAINT PKU PRIMARY KEY (usuarioId),
	CONSTRAINT USUARIO_SEXO_CHK check (sexo in ('Masculino', 'Femenino')),
	CONSTRAINT PERFIL_USUARIO_ID_FK FOREIGN KEY (perfilUsuarioId) REFERENCES perfilUsuario (perfilUsuarioId),
    CONSTRAINT TIPO_USUARIO_ID_FK FOREIGN KEY (tipoUsuarioId) REFERENCES tipoUsuario (tipoUsuarioId)
);



-- 
-- Tabla historico de un curso 
--

CREATE SEQUENCE seqHistoricoCurso;

CREATE TABLE historicoCurso(
	historicoCursoId 	integer 	default nextval('seqHistoricoCurso'),
	fechaEstado 		date 		NOT NULL,
	estadoCursoId 		integer		NOT NULL,
	cursoId 			integer 	NOT NULL,
	usuarioId 			integer 	NOT NULL,
	CONSTRAINT PKH PRIMARY KEY (historicoCursoId),
	CONSTRAINT ESTADO_CURSO_ID_FK FOREIGN KEY (estadoCursoId) REFERENCES estadoCurso (estadoCursoId),
	CONSTRAINT CURSO_ID_FK FOREIGN KEY (cursoId) REFERENCES curso (cursoId),
	CONSTRAINT USUARIO_ID_FK FOREIGN KEY (usuarioId) REFERENCES usuario (usuarioId)
);


-- 
-- Tabla curso usuario 
--

CREATE SEQUENCE seqCursoUsuario;

CREATE TABLE cursoUsuario(
	cursoUsuarioId 			integer 		default nextval ('seqCursoUsuario'),
	estadoActual 			varchar(40)		NOT NULL,
	fechaEstadoActual 		date 			NOT NULL,
	cursoId 				integer 		NOT NULL,
	usuarioId 				integer 		NOT NULL,
	estadoCursoId 			integer 		NOT NULL,
	formaPagoId 			integer			NOT NULL,
	facturaId 				integer 		NOT NULL,
	CONSTRAINT PKCU PRIMARY KEY (cursoUsuarioId),
    CONSTRAINT CURSO_ID_FK2 FOREIGN KEY (cursoId) REFERENCES curso (cursoId),
    CONSTRAINT USUARIO_ID_FK FOREIGN KEY (usuarioId) REFERENCES usuario (usuarioId),
    CONSTRAINT ESTADO_CURSO_ID_FK2 FOREIGN KEY (estadoCursoId) REFERENCES estadoCurso (estadoCursoId),
    CONSTRAINT FORMA_PAGO_ID_FK FOREIGN KEY (formaPagoId) REFERENCES formaPago (formaPagoId),
    CONSTRAINT FACTURA_ID_FK FOREIGN KEY (facturaId) REFERENCES factura (facturaId)
);




