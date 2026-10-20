---
layout: "post"
title: "Frobenius Theorem"
date: "2022-06-07"
tags: ["math", "differential geometry"]
excerpt: "The following result captures the equivalence of these definitions."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="frobenius-theorem" data-note-section="title">

</div>
<p>The definitions of flows and vector fields used below are developed in Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>. Suppose we prescribe a tangent subspace of fixed dimension at every point. When are these subspaces the tangent spaces of local submanifolds? Frobenius’ theorem gives a differential criterion: vector fields taking values in the prescribed subspaces must remain in them after taking a Lie bracket. Much of the terminology is introduced in Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>.</p>

<div id="def:involutive" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  With {% raw %}<span class="math inline">\(0 \leq n \leq m \leq k\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(M \subset \mathbb R^k\)</span>{% endraw %} be an {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-dimensional manifold. Let {% raw %}<span class="math inline">\(E \subset TM\)</span>{% endraw %} be a subbundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. We say {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is <strong>involutive</strong> if for any two vector fields {% raw %}<span class="math inline">\(X,Y \in \operatorname{Vec}(M)\)</span>{% endraw %} taking values in {% raw %}<span class="math inline">\(E\)</span>{% endraw %} (i.e., {% raw %}<span class="math inline">\(X_p, Y_p \in E_p\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}), we have {% raw %}<span class="math inline">\([X,Y]_p \in E_p\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}.</p>

<p>It is equivalent to test involutivity on local sections. Indeed, near any chosen point, multiply a local section by a bump function equal to one on a smaller neighbourhood and supported in its domain, then extend by zero. The extension is a global smooth section of {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, and its bracket near the chosen point agrees with the original local bracket. This justifies using local frames in the proof.</p>
</div>
<div id="def:integrable" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  With the qualifiers as in Definition <a href="#def:involutive" data-reference-type="ref" data-reference="def:involutive">1</a>, we say {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is <strong>integrable</strong> if for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, there exists a submanifold {% raw %}<span class="math inline">\(N \subset M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(p \in N\)</span>{% endraw %}, <em>and</em> {% raw %}<span class="math inline">\(T_q N = E_q\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(q \in N\)</span>{% endraw %}.</p>

</div>
<div id="def:foliation-box" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  With the qualifiers as in Definition <a href="#def:involutive" data-reference-type="ref" data-reference="def:involutive">1</a>, we say a <strong>foliation box</strong> for {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is a coordinate chart {% raw %}<span class="math inline">\(\varphi : U \to \Omega\)</span>{% endraw %} defined on an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} that takes values in an open set {% raw %}<span class="math inline">\(\Omega \subset \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Omega \cap (\mathbb R^n \times \{y\})\)</span>{% endraw %} is connected for all {% raw %}<span class="math inline">\(y \in \mathbb R^{m-n}\)</span>{% endraw %} <em>and</em> for all {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(v \in E_p \iff \dif \varphi_p(v) \in \mathbb R^n \times \{0\}\)</span>{% endraw %}.</p>

</div>
<p>These definitions describe the same local geometry in three forms: closure under Lie brackets, existence of integral submanifolds, and coordinates in which those submanifolds are slices.</p>

<div id="thm:frobenius" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>.  Suppose {% raw %}<span class="math inline">\(M \subset \mathbb R^k\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-dimensional manifold, and {% raw %}<span class="math inline">\(E \subset TM\)</span>{% endraw %} is a subbundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Then, the following statements are equivalent:</p>

<ol>
<li><p><span id="frobenius:a" data-label="frobenius:a"></span> {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is involutive;</p></li>
<li><p><span id="frobenius:b" data-label="frobenius:b"></span> {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is integrable;</p></li>
<li><p><span id="frobenius:c" data-label="frobenius:c"></span> For every {% raw %}<span class="math inline">\(p_0 \in M\)</span>{% endraw %}, there exists a foliation box {% raw %}<span class="math inline">\(\varphi : U \to \Omega\)</span>{% endraw %} with {% raw %}<span class="math inline">\(p_0 \in U\)</span>{% endraw %}.</p></li>
</ol>
<p>The result is local and does not use the embedding into {% raw %}<span class="math inline">\(\mathbb R^k\)</span>{% endraw %} or a Riemannian metric. Smoothness and constant rank of the subbundle are the essential hypotheses. When {% raw %}<span class="math inline">\(n=0\)</span>{% endraw %}, the integral submanifolds are single points and every small chart is a foliation box. When {% raw %}<span class="math inline">\(n=m\)</span>{% endraw %}, {% raw %}<span class="math inline">\(E=TM\)</span>{% endraw %}, and a connected coordinate neighbourhood itself is an integral submanifold. The following construction covers the intermediate ranks.</p>
</div>
<p>The main implication constructs a foliation box from involutivity. We will compose flows to form a coordinate map. The lemma below ensures that the tangent directions already in the subbundle remain there under these flows.</p>

<div id="lem:involutive-implies-foliation-box" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>.  Let {% raw %}<span class="math inline">\(E \subset TM\)</span>{% endraw %} be an involutive subbundle of the tangent bundle. Let {% raw %}<span class="math inline">\(X \in \operatorname{Vec}(M)\)</span>{% endraw %} be a complete vector field such that {% raw %}<span class="math inline">\(X_p \in E_p\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\phi^t : \mathbb R \to \operatorname{Diff}(M)\)</span>{% endraw %} denote the flow of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Then for all {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dif \phi^t_p (E_p) = E_{\phi^t (p)} ~.
    
\end{aligned}\]</div>{% endraw %}
<p>Two details in the proof below make the local-to-global step precise. If a local frame of {% raw %}<span class="math inline">\(E\)</span>{% endraw %} has block component matrix {% raw %}<span class="math inline">\(\binom{B(z)}{C(z)}\)</span>{% endraw %}, choose coordinates so that {% raw %}<span class="math inline">\(B(p_0)\)</span>{% endraw %} is invertible. On a smaller neighbourhood {% raw %}<span class="math inline">\(B(z)\)</span>{% endraw %} stays invertible, and the graph matrix is {% raw %}<span class="math inline">\(A(z)=C(z)B(z)^{-1}\)</span>{% endraw %}, which is smooth. In this chart, membership in {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is the closed equation {% raw %}<span class="math inline">\(\eta-A(z)\zeta=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is a closed subset of {% raw %}<span class="math inline">\(TM\)</span>{% endraw %}.</p>
<p>A compactly supported smooth vector field is complete: an integral curve outside its compact support is stationary; while it moves it stays in that support. A finite family of local ODE existence neighbourhoods covering the compact support gives a common short continuation time. A finite maximal endpoint would therefore allow extension and contradict maximality. This is why the bump-function extension used in both proofs supplies global flows without assuming completeness of the Riemannian metric.</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:frobenius" data-reference-type="ref" data-reference="thm:frobenius">4</a>.</em> We begin with the two implications that follow directly from coordinate slices and the intrinsic Lie bracket. First, suppose condition (c) of Theorem <a href="#frobenius:c" data-reference-type="ref" data-reference="frobenius:c">4</a> holds. Then, let {% raw %}<span class="math inline">\(\varphi: U \to \Omega\)</span>{% endraw %} denote such a foliation box with {% raw %}<span class="math inline">\(p_0 \in U\)</span>{% endraw %}. We can show that there is a submanifold {% raw %}<span class="math inline">\(N \subset M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(T_q N = E_q\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(q \in N\)</span>{% endraw %} <em>and</em> {% raw %}<span class="math inline">\(p_0 \in N\)</span>{% endraw %}. In fact, we can simply take </p>

{% raw %}<div class="math display">\[\begin{aligned}
        N = \varphi^{-1} \big( \Omega \cap (\mathbb R^n \times \{y_0\}) \big) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> with {% raw %}<span class="math inline">\((x_0, y_0) = \varphi(p_0) \in \Omega\)</span>{% endraw %}. Clearly, {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is a submanifold as the preimage of a coordinate slice under the chart {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} (in particular, it inherits the subspace topology and smooth structure), and by definition of the foliation box, its tangent space {% raw %}<span class="math inline">\(T_q N\)</span>{% endraw %} is exactly the fibre {% raw %}<span class="math inline">\(E_q = \{v \in T_q M : \dif \varphi_q(v) \in \mathbb R^n \times \{0\}\}\)</span>{% endraw %}. This shows that <a href="#frobenius:c" data-reference-type="ref" data-reference="frobenius:c">(c)</a> implies <a href="#frobenius:b" data-reference-type="ref" data-reference="frobenius:b">(b)</a>.</p>

<p>Now suppose condition <a href="#frobenius:b" data-reference-type="ref" data-reference="frobenius:b">(b)</a> holds. We want to show that {% raw %}<span class="math inline">\([X,Y]_p \in E_p\)</span>{% endraw %} if {% raw %}<span class="math inline">\(X_p,Y_p \in E_p\)</span>{% endraw %} (for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}). To see this, fix {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(X_q, Y_q \in E_q = T_q N\)</span>{% endraw %} for some integral submanifold {% raw %}<span class="math inline">\(N \subset M\)</span>{% endraw %} where {% raw %}<span class="math inline">\(p \in N\)</span>{% endraw %} <em>and</em> {% raw %}<span class="math inline">\(E_q = T_q N\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(q \in N\)</span>{% endraw %}, the usual rules apply, so {% raw %}<span class="math inline">\(X|_N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y|_N\)</span>{% endraw %} are both well-defined smooth vector fields tangent to {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Therefore, the restriction of {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} to {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is identically the intrinsic Lie bracket on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. As such, {% raw %}<span class="math inline">\([X,Y]_p \in T_p N = E_p\)</span>{% endraw %}, as desired.</p>

<p>Finally, suppose condition <a href="#frobenius:a" data-reference-type="ref" data-reference="frobenius:a">(a)</a> holds. Fix a point {% raw %}<span class="math inline">\(p_0 \in M\)</span>{% endraw %}. By standard local extension arguments, there must exist vector fields {% raw %}<span class="math inline">\(X_1, \cdots, X_n \in \operatorname{Vec}(M)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_i (p) \in E_p\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_1(p_0), \cdots, X_n(p_0)\)</span>{% endraw %} together form a basis of {% raw %}<span class="math inline">\(E_{p_0}\)</span>{% endraw %}. Repeating the argument, there must exist vector fields {% raw %}<span class="math inline">\(Z_1, \cdots, Z_{m-n} \in \operatorname{Vec}(M)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\{X_1(p_0), \cdots, X_n(p_0), Z_1(p_0), \cdots, Z_{m-n}(p_0)\}\)</span>{% endraw %} forms a basis of {% raw %}<span class="math inline">\(T_{p_0} M\)</span>{% endraw %}. It is without loss of generality to assume that all vector fields {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_j\)</span>{% endraw %} have compact support (for instance, by multiplying local extensions by a bump function), implying they are complete vector fields on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{\phi^t_i\}_{1 \leq i \leq n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{\psi^t_j\}_{1 \leq j \leq m-n}\)</span>{% endraw %} denote the flows of vector fields {% raw %}<span class="math inline">\(\{X_i\}_{1 \leq i \leq n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{Z_j\}_{1 \leq j \leq m-n}\)</span>{% endraw %}, respectively. Define </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Phi : \mathbb R^n \times \mathbb R^{m-n} \to M : (x,y) \mapsto \phi_1^{x_1} \circ \cdots \circ \phi_n^{x_n} \circ \psi_1^{y_1} \circ \cdots \circ \psi_{m-n}^{y_{m-n}} (p_0) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> By Lemma <a href="#lem:involutive-implies-foliation-box" data-reference-type="ref" data-reference="lem:involutive-implies-foliation-box">5</a>, the flows {% raw %}<span class="math inline">\(\phi_k\)</span>{% endraw %} of the vector fields {% raw %}<span class="math inline">\(X_k\)</span>{% endraw %} preserve {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, meaning {% raw %}<span class="math inline">\(\dif \phi_k^t (p) E_p = E_{\phi_k^t (p)}\)</span>{% endraw %}. By the chain rule, pushing forward the vector field {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} by these intermediate flows keeps it taking values in {% raw %}<span class="math inline">\(E\)</span>{% endraw %}. Thus, in local coordinates, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{\partial \Phi}{\partial x_i} (x,y) = \dif \left( \phi_1^{x_1} \circ \cdots \circ \phi_{i-1}^{x_{i-1}} \right)_{p&#x27;} X_i(p&#x27;) \in E_{\Phi(x,y)} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(p&#x27; = \phi_i^{x_i} \circ \cdots \circ \psi_{m-n}^{y_{m-n}}(p_0)\)</span>{% endraw %}, for all {% raw %}<span class="math inline">\((x,y) \in \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(\frac{\partial \Phi}{\partial x_i} (0,0) = X_i(p_0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\frac{\partial \Phi}{\partial y_j} (0,0) = Z_j(p_0)\)</span>{% endraw %}, the differential {% raw %}<span class="math inline">\(\dif \Phi(0,0) : \mathbb R^n \times \mathbb R^{m-n} \to T_{p_0} M\)</span>{% endraw %} is <em>bijective</em>. The inverse function theorem then implies there exists an open neighbourhood {% raw %}<span class="math inline">\(\Omega \subset \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %} of the origin (which we may shrink to a product of open balls so that its slices are connected) such that {% raw %}<span class="math inline">\(U \triangleq \Phi(\Omega) \subset M\)</span>{% endraw %} is an open neighbourhood of {% raw %}<span class="math inline">\(p_0 \in M\)</span>{% endraw %}, <em>and</em> {% raw %}<span class="math inline">\(\Phi|_{\Omega} : \Omega \to U\)</span>{% endraw %} is a diffeomorphism. Therefore, {% raw %}<span class="math inline">\(\left\{ \frac{\partial \Phi}{\partial x_i} (x,y) \right\}_{1 \leq i \leq n}\)</span>{% endraw %} are linearly independent for every {% raw %}<span class="math inline">\((x,y) \in \Omega\)</span>{% endraw %}, so these form a basis of {% raw %}<span class="math inline">\(E_{\Phi(x,y)}\)</span>{% endraw %}. As such, {% raw %}<span class="math inline">\(\varphi \triangleq (\Phi|_\Omega)^{-1} : U \to \Omega\)</span>{% endraw %} is a foliation box. ◻</p>

</div>
<p>It remains to prove Lemma <a href="#lem:involutive-implies-foliation-box" data-reference-type="ref" data-reference="lem:involutive-implies-foliation-box">5</a>. We prove it by expressing the subbundle locally as the graph of a matrix. Involutivity becomes an identity for that matrix, and uniqueness for a linear differential equation gives the required invariance.</p>

<div class="proof">
<p><em>Proof of Lemma <a href="#lem:involutive-implies-foliation-box" data-reference-type="ref" data-reference="lem:involutive-implies-foliation-box">5</a>.</em></p>

<ol>
<li><p>Both this step and the next step will be devoted to proving the following fact: if {% raw %}<span class="math inline">\(E \subset TM\)</span>{% endraw %} is an involutive subbundle, and {% raw %}<span class="math inline">\(\beta : \mathbb R^2 \to M\)</span>{% endraw %} is a smooth map such that </p>

{% raw %}<span id="eq:involutive-implies-foliation-pre-lemma-condition"></span><div class="math display">\[\begin{aligned}
 
    \frac{\partial \beta}{\partial s} (s,0) \in E_{\beta(s,0)} \quad,\quad \frac{\partial \beta}{\partial t} (s,t) \in E_{\beta(s,t)} \quad \forall s,t ~,
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> then {% raw %}<span class="math inline">\(\frac{\partial \beta}{\partial s} (s,t) \in E_{\beta(s,t)}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}. For intuition, note that the conditions in <a href="#eq:involutive-implies-foliation-pre-lemma-condition" data-reference-type="eqref" data-reference="eq:involutive-implies-foliation-pre-lemma-condition">(1)</a> essentially imply that {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} acts as a smooth integral curve along the “{% raw %}<span class="math inline">\(t\)</span>{% endraw %}-axis”, so we can reasonably expect that {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} admits a smooth first variation along the “{% raw %}<span class="math inline">\(s\)</span>{% endraw %}-axis” by calculus of variations.</p>

<p>To see that this is formally true, pick any {% raw %}<span class="math inline">\(p_0 \in M\)</span>{% endraw %}, and we choose a coordinate chart {% raw %}<span class="math inline">\(\phi: U \to \Omega\)</span>{% endraw %} for an open set {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} with values in {% raw %}<span class="math inline">\(\Omega \subset \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(p_0 \in U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\dif \phi_{p_0}(E_{p_0}) = \mathbb R^n \times \{0\}\)</span>{% endraw %}. Then for every {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}, the linear subspace {% raw %}<span class="math inline">\(\dif \phi_p(E_p) \subset \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %} is the graph of a matrix {% raw %}<span class="math inline">\(A \in \mathbb R^{(m-n) \times n}\)</span>{% endraw %}. This can be done by shrinking {% raw %}<span class="math inline">\(U\)</span>{% endraw %} to a small enough neighborhood in {% raw %}<span class="math inline">\(M\)</span>{% endraw %} if necessary. Because this is possible, there must exist a smooth map {% raw %}<span class="math inline">\(A : \Omega \to \mathbb R^{(m-n) \times n}\)</span>{% endraw %} (which evaluates to a matrix, not necessarily linear in its arguments) such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif \phi_p(E_p) = \{(\zeta, A(x,y) \zeta) : \zeta \in \mathbb R^n\} ~,~\quad (x,y) = \phi(p) \in \Omega \quad \forall p \in U ~.
\end{aligned}\]</div>{% endraw %}
<p> We can now define the <em>linear maps</em> </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \frac{\partial A}{\partial x} (x,y) \cdot \zeta &amp;\triangleq \sum_{1 \leq i \leq n} \zeta_i \frac{\partial A}{\partial x_i} (x,y) \in \mathbb R^{(m-n) \times n} ~, \\
    \frac{\partial A}{\partial y} (x,y) \cdot \eta &amp;\triangleq \sum_{1 \leq j \leq m-n} \eta_j \frac{\partial A}{\partial y_j} (x,y) \in \mathbb R^{(m-n) \times n} ~.
\end{aligned}\]</div>{% endraw %}
<p> The remainder of this step will be devoted to proving two claims. First, we <u>claim</u> that for {% raw %}<span class="math inline">\((x,y) \in \Omega\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\zeta,\widetilde \zeta \in \mathbb R^n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\eta,\widetilde \eta \in \mathbb R^{m-n}\)</span>{% endraw %} defined by {% raw %}<span class="math inline">\(\eta \triangleq A(x,y) \zeta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde \eta \triangleq A(x,y) \widetilde \zeta\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \left( \frac{\partial A}{\partial x}(x,y) \cdot \zeta + \frac{\partial A}{\partial y}(x,y) \cdot \eta \right) \widetilde \zeta = \left( \frac{\partial A}{\partial x}(x,y) \cdot \widetilde \zeta + \frac{\partial A}{\partial y}(x,y) \cdot \widetilde \eta \right) \zeta ~.
\end{aligned}\]</div>{% endraw %}
<p> To see this, the graphs of the matrices {% raw %}<span class="math inline">\(A(z)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(z = (x,y) \in \Omega\)</span>{% endraw %} determine a subbundle {% raw %}<span class="math inline">\(\widetilde E \subset \Omega \times \mathbb R^m\)</span>{% endraw %} with the fibres </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \widetilde E_z \triangleq \{(\zeta,\eta) \in \mathbb R^n \times \mathbb R^{m-n} : \eta = A(x,y) \zeta \} ~.
\end{aligned}\]</div>{% endraw %}
<p> This subbundle is involutive, because under the bundle isomorphism {% raw %}<span class="math inline">\(\rho : TM|_U \to \Omega \times \mathbb R^m : (p,v) \mapsto (\phi(p), \dif \phi_p(v))\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde E\)</span>{% endraw %} is exactly the image of {% raw %}<span class="math inline">\(E|_U\)</span>{% endraw %}. Furthermore, fix {% raw %}<span class="math inline">\(\zeta, \widetilde \zeta \in \mathbb R^n\)</span>{% endraw %}; define vector fields {% raw %}<span class="math inline">\(\mathscr Z, \widetilde{\mathscr Z} : \Omega \to \mathbb R^n \times \mathbb R^{m-n}\)</span>{% endraw %} evaluated by {% raw %}<span class="math inline">\(\mathscr Z(z) \triangleq (\zeta,A(z) \zeta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde{\mathscr Z}(z) \triangleq (\widetilde\zeta, A(z)\widetilde\zeta)\)</span>{% endraw %}. In other words, {% raw %}<span class="math inline">\(\mathscr Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde{\mathscr Z}\)</span>{% endraw %} are sections of {% raw %}<span class="math inline">\(\widetilde E\)</span>{% endraw %}, so their Lie bracket in local coordinates {% raw %}<span class="math inline">\([X,Y] = D Y \cdot X - D X \cdot Y\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
    [\mathscr Z,\widetilde{\mathscr Z}](z) = \left(0, \left(\dif A(z) \mathscr Z(z)\right)\widetilde\zeta - \left(\dif A(z) \widetilde{\mathscr Z}(z)\right) \zeta \right) ~.
\end{aligned}\]</div>{% endraw %}
<p> Because {% raw %}<span class="math inline">\(\widetilde E\)</span>{% endraw %} is involutive, it follows that the Lie bracket above must evaluate to a vector taking values in the graph of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Since its first component is zero, it must be that {% raw %}<span class="math inline">\([\mathscr Z,\widetilde{\mathscr Z}](z)\)</span>{% endraw %} vanishes entirely to lie in {% raw %}<span class="math inline">\(A\)</span>{% endraw %}’s span. The claim is therefore established.</p>

<p>Another <u>claim</u> is that if {% raw %}<span class="math inline">\(I,J \subset \mathbb R\)</span>{% endraw %} are open intervals, {% raw %}<span class="math inline">\(z = (x,y) : I \times J \to \Omega\)</span>{% endraw %} is a smooth map, and {% raw %}<span class="math inline">\(s_0 \in I\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t_0 \in J\)</span>{% endraw %} are fixed points such that </p>

{% raw %}<span id="eq:claim2-as1"></span><span id="eq:claim2-as2"></span><div class="math display">\[\begin{aligned}
     \frac{\partial y}{\partial s} (s_0,t_0) &amp;= A(x(s_0,t_0), y(s_0,t_0)) \frac{\partial x}{\partial s} (s_0,t_0) ~, \\
     \frac{\partial y}{\partial t} (s,t) &amp;= A(x(s,t), y(s,t)) \frac{\partial x}{\partial t} (s,t)  
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> for all {% raw %}<span class="math inline">\(s \in I\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t \in J\)</span>{% endraw %}, then </p>

{% raw %}<span id="eq:claim2-res"></span><div class="math display">\[\begin{aligned}
 
    \frac{\partial y}{\partial s}(s_0,t) = A(x(s_0,t),y(s_0,t)) \frac{\partial x}{\partial s}(s_0,t) \quad \forall t \in J ~.
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> Clearly, the conclusion <a href="#eq:claim2-res" data-reference-type="eqref" data-reference="eq:claim2-res">(3)</a> holds for {% raw %}<span class="math inline">\(t=t_0\)</span>{% endraw %}. Suppressing the arguments {% raw %}<span class="math inline">\((s,t)\)</span>{% endraw %} in favour of simply using {% raw %}<span class="math inline">\(z=(x,y)\)</span>{% endraw %} (while noting that this is an abuse of notation), we have </p>

{% raw %}<span id="eq:direct-calc"></span><div class="math display">\[\begin{aligned}
 
    \frac{\partial}{\partial t} \left( \frac{\partial y}{\partial s} - A \cdot \frac{\partial x}{\partial s} \right) 
    &amp;= \frac{\partial^2 y}{\partial s \partial t} - A \frac{\partial^2 x}{\partial s \partial t} - \left( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial t} + \frac{\partial A}{\partial y} \cdot \frac{\partial y}{\partial t} \right) \frac{\partial x}{\partial s} \nonumber \\
    &amp;\overset{(2)}{=} \frac{\partial^2 y}{\partial s \partial t} - A \frac{\partial^2 x}{\partial s \partial t} - \left( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial t} + \frac{\partial A}{\partial y} \cdot \bigg( A \frac{\partial x}{\partial t} \bigg) \right) \frac{\partial x}{\partial s} \nonumber \\
    &amp;\overset{\text{previous claim}}{=} \frac{\partial^2 y}{\partial s \partial t} - A \frac{\partial^2 x}{\partial s \partial t} - \left( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial s} + \frac{\partial A}{\partial y} \cdot \bigg( A \frac{\partial x}{\partial s} \bigg) \right) \frac{\partial x}{\partial t} \nonumber \\
    &amp;= \frac{\partial^2 y}{\partial s \partial t} - A \frac{\partial^2 x}{\partial s \partial t} - \left( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial s} + \frac{\partial A}{\partial y} \cdot \bigg( \frac{\partial y}{\partial s} - \left( \frac{\partial y}{\partial s} - A \frac{\partial x}{\partial s} \right) \bigg) \right) \frac{\partial x}{\partial t} ~.
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> Notice also that by differentiating <a href="#eq:claim2-as2" data-reference-type="eqref" data-reference="eq:claim2-as2">(2)</a> with respect to {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\frac{\partial^2 y}{\partial s \partial t} = \bigg( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial s} + \frac{\partial A}{\partial y} \cdot \frac{\partial y}{\partial s} \bigg) \frac{\partial x}{\partial t} + A \frac{\partial^2 x}{\partial s \partial t} \implies \frac{\partial^2 y}{\partial s \partial t} - A \frac{\partial^2 x}{\partial s \partial t} = \bigg( \frac{\partial A}{\partial x} \cdot \frac{\partial x}{\partial s} + \frac{\partial A}{\partial y} \cdot \frac{\partial y}{\partial s} \bigg) \frac{\partial x}{\partial t} ~,\]</div>{% endraw %}
<p> Substitution cancels the first terms, leaving </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (4) = \left( \frac{\partial A}{\partial y} \cdot \bigg( \frac{\partial y}{\partial s} - A \frac{\partial x}{\partial s} \bigg) \right) \frac{\partial x}{\partial t} ~.
\end{aligned}\]</div>{% endraw %}
<p> Defining a smooth curve {% raw %}<span class="math inline">\(\eta : J \to \mathbb R^{m-n}\)</span>{% endraw %} (for fixed {% raw %}<span class="math inline">\(s_0\)</span>{% endraw %}) via </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \eta(t) \triangleq \frac{\partial y}{\partial s} (s_0,t) - A \left( x(s_0,t), y(s_0,t) \right) \frac{\partial x}{\partial s} (s_0,t) ~.
\end{aligned}\]</div>{% endraw %}
<p> Clearly, by <a href="#eq:claim2-as1" data-reference-type="eqref" data-reference="eq:claim2-as1">(2)</a> and the equality above, we have that {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} satisfies the linear differential equation </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dot \eta(t) = \left( \frac{\partial A}{\partial y} \left( x(s_0,t), y(s_0,t) \right) \cdot \eta(t) \right) \frac{\partial x}{\partial t} (s_0,t) \quad \text{with} \quad \eta(t_0) = 0 ~,
\end{aligned}\]</div>{% endraw %}
<p> so by the uniqueness of solutions to linear ODEs, {% raw %}<span class="math inline">\(\eta(t)=0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in J\)</span>{% endraw %}. This therefore implies the second claim.</p></li>
<li><p>Suppose {% raw %}<span class="math inline">\(\beta : \mathbb R^2 \to M\)</span>{% endraw %} is as at the beginning of Step 1. Fix {% raw %}<span class="math inline">\(s_0 \in \mathbb R\)</span>{% endraw %}. Consider the set </p>

{% raw %}<div class="math display">\[\begin{aligned}
    W \triangleq \left\{t \in \mathbb R : \frac{\partial \beta}{\partial s}(s_0,t) \in E_{\beta(s_0,t)}\right\} ~,
\end{aligned}\]</div>{% endraw %}
<p> and the second claim of Step 1 implies {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is an open set. Because {% raw %}<span class="math inline">\(0 \in W\)</span>{% endraw %}, {% raw %}<span class="math inline">\(W \neq \emptyset\)</span>{% endraw %} (this is true by <a href="#eq:involutive-implies-foliation-pre-lemma-condition" data-reference-type="eqref" data-reference="eq:involutive-implies-foliation-pre-lemma-condition">(1)</a>). Furthermore, {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is closed in {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} because {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is a closed subbundle in {% raw %}<span class="math inline">\(TM\)</span>{% endraw %} and partial derivatives are continuous. By the connectedness of {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, it follows that {% raw %}<span class="math inline">\(W = \mathbb R\)</span>{% endraw %}. By the fact that {% raw %}<span class="math inline">\(s_0 \in \mathbb R\)</span>{% endraw %} is picked arbitrarily, we’ve established the desired conclusion {% raw %}<span class="math inline">\(\frac{\partial \beta}{\partial s} (s,t) \in E_{\beta(s,t)}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}.</p></li>
<li><p>We can now use Steps 1 and 2 to show that Lemma <a href="#lem:involutive-implies-foliation-box" data-reference-type="ref" data-reference="lem:involutive-implies-foliation-box">5</a> follows. To see this, let {% raw %}<span class="math inline">\(X \in \operatorname{Vec}(M)\)</span>{% endraw %} denote a complete vector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_p \in E_p\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\phi^t\)</span>{% endraw %} denote the flow of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Pick a point {% raw %}<span class="math inline">\(p_0 \in M\)</span>{% endraw %} and a vector {% raw %}<span class="math inline">\(v_0 \in E_{p_0}\)</span>{% endraw %}. Then, there exists a vector field {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with values in {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(Y(p_0) = v_0\)</span>{% endraw %}; in particular, choose a vector field that has compact support, implying it is complete. Therefore, Picard-Lindelöf implies that there exists a global solution {% raw %}<span class="math inline">\(\gamma : \mathbb R \to M\)</span>{% endraw %} of the initial value problem </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dot \gamma(s) = Y(\gamma(s)) \quad \text{with } \gamma(0) = p_0 ~.
\end{aligned}\]</div>{% endraw %}
<p> Let {% raw %}<span class="math inline">\(\beta : \mathbb R^2 \to M : (s,t) \mapsto \phi^t(\gamma(s))\)</span>{% endraw %} for {% raw %}<span class="math inline">\(s,t \in \mathbb R\)</span>{% endraw %}. Then, it clearly follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \frac{\partial \beta}{\partial s} (s,0) &amp;= \dot \gamma(s) = Y(\gamma(s)) \in E_{\beta(s,0)} ~, \text{and } \\
    \frac{\partial \beta}{\partial t} (s,t) &amp;= X(\beta(s,t)) \in E_{\beta(s,t)}
\end{aligned}\]</div>{% endraw %}
<p> for all {% raw %}<span class="math inline">\(s,t \in \mathbb R\)</span>{% endraw %}. It then follows from a direct application of Step 1’s main fact (proven globally in Step 2) that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif \phi^t_{p_0} (v_0) = \dif \phi^t_{\gamma(0)} (\dot \gamma(0)) = \frac{\partial \beta}{\partial s}(0,t) \in E_{\beta(0,t)} = E_{\phi^t(p_0)} \quad \forall t \in \mathbb R ~.
\end{aligned}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(v_0 \in E_{p_0}\)</span>{% endraw %} was arbitrary and {% raw %}<span class="math inline">\(\dif \phi^t_{p_0}\)</span>{% endraw %} is a linear map, this implies {% raw %}<span class="math inline">\(\dif \phi^t_{p_0} (E_{p_0}) \subset E_{\phi^t(p_0)}\)</span>{% endraw %}. Applying the same argument to the reversed complete vector field {% raw %}<span class="math inline">\(-X\)</span>{% endraw %} with its valid flow {% raw %}<span class="math inline">\(\phi^{-t}\)</span>{% endraw %} yields the reverse inclusion {% raw %}<span class="math inline">\(E_{\phi^t(p_0)} \subset \dif \phi^t_{p_0} (E_{p_0})\)</span>{% endraw %}, establishing equality {% raw %}<span class="math inline">\(\dif \phi^t_p (E_p) = E_{\phi^t(p)}\)</span>{% endraw %}.</p></li>
</ol>
<p>The propagation argument is not assuming the desired integral submanifolds in advance. The graph-bracket calculation gives a homogeneous <em>linear</em> ODE for the defect {% raw %}<span class="math inline">\(\eta(t)=y_s-Ax_s\)</span>{% endraw %}, with coefficient map {% raw %}<span class="math inline">\(u\mapsto(D_yA\cdot u)x_t\)</span>{% endraw %}. Zero initial defect remains zero by uniqueness. Around any time where the defect vanishes, restrict the two-parameter map to a small rectangle lying in one graph chart; this proves that the zero set of times is open. Closedness follows from the subbundle equation, and connectedness propagates the identity along the entire time axis. The inverse flow then converts inclusion of fibres into equality.</p>
<p>This proves Lemma <a href="#lem:involutive-implies-foliation-box" data-reference-type="ref" data-reference="lem:involutive-implies-foliation-box">5</a>. ◻</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}">Vector Fields and Their Flows</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">Connections, Lie Brackets, and Curvature</a> · Next: <a href="{% post_url 2022-07-31-first-variation-formula %}">First Variation Formula</a></p></nav>

</div>
