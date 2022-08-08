--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "creatorId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token, "createdAt") FROM stdin;
1	5	58dce596-e506-4cf2-b5e0-a688a6e750e6	2022-08-06 21:26:12.695663
2	5	9e519a63-6325-4936-991c-f29713e4935a	2022-08-06 21:37:36.768868
3	2	7765f1bd-32d5-4361-b5f8-038d8cff51dd	2022-08-06 21:43:29.652459
4	5	1c6891b5-5861-43fb-8d69-332f2599d565	2022-08-08 00:57:13.493226
5	6	90d4f8ec-4c2e-480d-a86e-aa74c72a35c0	2022-08-08 01:57:14.75612
6	7	f64adfa1-8f43-4ecb-bbcd-75cefab9b6ab	2022-08-08 01:59:19.060948
7	2	678ecd5e-0324-4ede-82ff-8991c36c248e	2022-08-08 02:03:47.11892
8	2	18aa339f-7e98-45cf-bbec-c63cf2e5c7f6	2022-08-08 02:47:17.97954
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, url, "shortUrl", "visitCount", "creatorId", "createdAt") FROM stdin;
5	https://www.google.com/search?q=pesquisa&sxsrf=ALiCzsZfAw96l3fU-GrH65CXgRtBo_Xhww%3A1659848145621&source=hp&ei=0UXvYpCCJJrh1sQP6fCPoAE&iflsig=AJiK0e8AAAAAYu9T4YlqPvfzmcRAjoXo3XNrl5PFiTlG&ved=0ahUKEwjQruWY-LP5AhWasJUCHWn4AxQQ4dUDCAc&uact=5&oq=pesquisa&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgQIABBDOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOgQIIxAnOgUILhCABDoECC4QQzoICC4QgAQQ1AI6CwguEIAEEMcBENEDOgcILhDUAhBDUPoDWK4MYLEOaAFwAHgAgAGMAYgBuweSAQMwLjiYAQCgAQGwAQo&sclient=gws-wiz	LiBYrbGj	5	5	2022-08-07 02:23:47.839868
4	https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D	I2uYHp4N	5	2	2022-08-07 02:23:16.805936
6	https://bityli.com/	KPGE4B8l	11	7	2022-08-08 02:29:00.469988
3	https://www.google.com/	esYIhdto	4	2	2022-08-07 00:56:43.543096
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	João	joao@email.com	12345	2022-08-06 18:42:49.344073
2	Maria	maria@email.com	$2b$10$G.MjtZra64kS.e6hagYGBu3mMkQixgFkmUIGFIhWw7jvqcjavhNEW	2022-08-06 18:55:13.131789
4	Lua	lua@email.com	$2b$10$4.kS.yINBWqioBshppnxyeijx5/oYFgKo5O.OAQdZf38pVCuJ44HS	2022-08-06 19:16:33.56613
5	Ana	ana@email.com	$2b$10$Sg/6PRgjJAXSK5o4CM9qo.PHkh0LByr2aD18RcF4IrCP4Zfo/DpNS	2022-08-06 20:39:10.962232
6	Luiza	luiza@email.com	$2b$10$E.b6uMsBRZMp.nzO2kRdq.CM9/i7RLaaKMxfjehi1MIwMLvj8AIQq	2022-08-08 01:46:32.897916
7	Carol	carol@email.com	$2b$10$E29lM53Z9Evw6fZ.9f44kudAdy336UCTEhNlxuqKuyKL8N9J9OS..	2022-08-08 01:59:00.090493
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 8, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_creatorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

