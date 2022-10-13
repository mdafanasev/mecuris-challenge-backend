--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: attributes_type_enum; Type: TYPE; Schema: public; Owner: mdafanasev
--

CREATE TYPE public.attributes_type_enum AS ENUM (
    'color',
    'visible'
);


ALTER TYPE public.attributes_type_enum OWNER TO mdafanasev;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: attributes; Type: TABLE; Schema: public; Owner: mdafanasev
--

CREATE TABLE public.attributes (
    id integer NOT NULL,
    type public.attributes_type_enum NOT NULL,
    name character varying NOT NULL,
    hint character varying NOT NULL,
    target character varying NOT NULL,
    value character varying NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "itemId" integer
);


ALTER TABLE public.attributes OWNER TO mdafanasev;

--
-- Name: attributes_id_seq; Type: SEQUENCE; Schema: public; Owner: mdafanasev
--

CREATE SEQUENCE public.attributes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attributes_id_seq OWNER TO mdafanasev;

--
-- Name: attributes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mdafanasev
--

ALTER SEQUENCE public.attributes_id_seq OWNED BY public.attributes.id;


--
-- Name: items; Type: TABLE; Schema: public; Owner: mdafanasev
--

CREATE TABLE public.items (
    id integer NOT NULL,
    name character varying NOT NULL,
    "modelUrl" character varying NOT NULL,
    "previewUrl" character varying NOT NULL,
    "isRemoved" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.items OWNER TO mdafanasev;

--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: mdafanasev
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.items_id_seq OWNER TO mdafanasev;

--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mdafanasev
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;


--
-- Name: attributes id; Type: DEFAULT; Schema: public; Owner: mdafanasev
--

ALTER TABLE ONLY public.attributes ALTER COLUMN id SET DEFAULT nextval('public.attributes_id_seq'::regclass);


--
-- Name: items id; Type: DEFAULT; Schema: public; Owner: mdafanasev
--

ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- Data for Name: attributes; Type: TABLE DATA; Schema: public; Owner: mdafanasev
--

COPY public.attributes (id, type, name, hint, target, value, "updatedAt", "itemId") FROM stdin;
3	visible	Roof visibility	Roof visibility	roof	true	2022-10-13 06:55:11.49043	1
1	color	Roof color	Roof color	roof	#5db58c	2022-10-13 07:01:15.414399	1
4	visible	Roof visibility	Roof visibility	roof	true	2022-10-13 07:32:08.309263	2
5	visible	Roof visibility	Roof visibility	roof	true	2022-10-13 07:32:13.311225	4
6	visible	Roof visibility	Roof visibility	roof	true	2022-10-13 07:32:27.680812	5
9	color	Pipe color	Pipe color	tube	#482838	2022-10-13 07:34:28.33513	5
12	visible	Pipe visibility	Pipe visibility	tube	true	2022-10-13 07:35:17.066202	3
13	visible	Pipe visibility	Pipe visibility	tube	true	2022-10-13 07:35:20.78393	5
21	color	Roof color	Roof color	roof	#438438	2022-10-13 07:36:42.299473	4
7	color	Pipe color	Pipe color	tube	#e03215	2022-10-13 07:36:59.812384	2
20	color	Roof color	Roof color	roof	#ffbf00	2022-10-13 07:37:03.6711	2
15	color	Walls color	Walls color	wall	#ff50b2	2022-10-13 07:37:06.055648	2
11	visible	Pipe visibility	Pipe visibility	tube	true	2022-10-13 07:37:09.657151	2
16	color	Walls color	Walls color	wall	#2592b3	2022-10-13 07:37:39.49813	3
8	color	Pipe color	Pipe color	tube	#ffbf00	2022-10-13 07:37:41.210978	3
18	color	Walls color	Walls color	wall	#2592b3	2022-10-13 07:37:46.725915	5
22	color	Roof color	Roof color	roof	#ffbf00	2022-10-13 07:37:47.77781	5
14	visible	Pipe visibility	Pipe visibility	tube	true	2022-10-13 07:37:55.682248	6
2	color	Wall color	Wall color	wall	#ffbf00	2022-10-13 07:38:21.218685	1
17	color	Walls color	Walls color	wall	#e03215	2022-10-13 07:39:31.845094	4
19	color	Walls color	Walls color	wall	#e03215	2022-10-13 07:40:09.70249	6
10	color	Pipe color	Pipe color	tube	#ffbf00	2022-10-13 07:40:11.655278	6
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: mdafanasev
--

COPY public.items (id, name, "modelUrl", "previewUrl", "isRemoved", "createdAt", "updatedAt") FROM stdin;
1	One	/static/models/1.gltf	/static/previews/1.png	f	2022-10-12 21:52:18.632976	2022-10-13 05:15:05.845096
2	Two	/static/models/2.gltf	/static/previews/2.png	f	2022-10-12 21:52:23.537107	2022-10-13 06:38:25.762033
3	Three	/static/models/3.gltf	/static/previews/3.png	f	2022-10-12 21:52:33.626268	2022-10-13 06:38:32.128796
4	Four	/static/models/4.gltf	/static/previews/4.png	f	2022-10-13 07:31:15.131999	2022-10-13 07:31:15.131999
5	Five	/static/models/5.gltf	/static/previews/5.png	f	2022-10-13 07:31:27.633337	2022-10-13 07:31:27.633337
6	Six	/static/models/6.gltf	/static/previews/6.png	f	2022-10-13 07:31:47.619568	2022-10-13 07:31:47.619568
\.


--
-- Name: attributes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mdafanasev
--

SELECT pg_catalog.setval('public.attributes_id_seq', 22, true);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mdafanasev
--

SELECT pg_catalog.setval('public.items_id_seq', 6, true);


--
-- Name: attributes PK_32216e2e61830211d3a5d7fa72c; Type: CONSTRAINT; Schema: public; Owner: mdafanasev
--

ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT "PK_32216e2e61830211d3a5d7fa72c" PRIMARY KEY (id);


--
-- Name: items PK_ba5885359424c15ca6b9e79bcf6; Type: CONSTRAINT; Schema: public; Owner: mdafanasev
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY (id);


--
-- Name: attributes FK_34e0c579da9ade175c970ee06aa; Type: FK CONSTRAINT; Schema: public; Owner: mdafanasev
--

ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT "FK_34e0c579da9ade175c970ee06aa" FOREIGN KEY ("itemId") REFERENCES public.items(id);


--
-- PostgreSQL database dump complete
--

