        function a() {
            return "undefined" != typeof window && window && "node" !== window.appEnvironment
        }
        function s() {
            var e, t, n
            return (null === (e = window) || void 0 === e || null === (t = e.navigator) || void 0 === t || null === (n = t.userAgent) || void 0 === n ? void 0 : n.indexOf("Chrome")) > -1
        }
        async function c() {
            const e = []
              , t = o.map((e => {
                let {id: t, file: n} = e
                return fetch(`chrome-extension://${t}/${n}`)
            }
            ))
            return (await Promise.allSettled(t)).forEach(( (t, n) => {
                if ("fulfilled" === t.status && void 0 !== t.value) {
                    const t = o[n]
                    t && e.push(t.id)
                }
            }
            )),
            e
        }
        async function l(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            if (!a() || !s())
                return
            const {useRequestIdleCallback: i=!1, timeout: r=2e3, staggerDetectionMs: l=0} = n
              , d = async () => {
                const n = l > 0 ? await async function(e) {
                    const t = []
                    for (const {id: n, file: i} of o) {
                        try {
                            await fetch(`chrome-extension://${n}/${i}`) && t.push(n)
                        } catch (e) {}
                        e > 0 && await new Promise((t => setTimeout(t, e)))
                    }
                    return t
                }(l) : await c()
                Array.isArray(n) && n.length > 0 && e.fireTrackingPayload("AedEvent", {
                    browserExtensionIds: n,
                    ...t
                })
            }
            i && "function" == typeof window.requestIdleCallback ? window.requestIdleCallback(d, {
                timeout: r
            }) : await d()
        }
        const d = "chrome-extension://"
        function u() {
            return window.document
        }
        function f(e) {
            const t = e.indexOf(d)
            return -1 === t ? "" : e.substring(t + d.length).split("/")[0]
        }
        function p(e, t, n) {
            if (e.nodeType === Node.TEXT_NODE && void 0 !== e.textContent && e.textContent.includes(t) && n.push(f(e.textContent)),
            e.nodeType === Node.ELEMENT_NODE)
                for (let i = 0; i < e.attributes.length; i++) {
                    const r = e.attributes.item(i)
                    void 0 !== r.value && r.value.includes(t) && n.push(f(r.value))
                }
            for (let i = 0; i < e.childNodes.length; i++)
                p(e.childNodes[i], t, n)
        }
        function h(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            if (!a() || !s())
                return
            const n = []
            p(u(), d, n),
            Array.isArray(n) && n.length > 0 && e.fireTrackingPayload("SpectroscopyEvent", {
                browserExtensionIds: n,
                ...t
            })
        }
