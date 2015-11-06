/**
 * Created by Administrator on 15-11-5.
 */
var Planets = Planets || {};

Planets.baseURL = './';

Planets.createSun = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/sunmap.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/sunmap.jpg'),
        bumpScale : 0.05
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createMercury = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/mercurymap.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/mercurybump.jpg'),
        bumpScale : 0.05
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createVenus = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/venusmap.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/venusbump.jpg'),
        bumpScale : 0.05
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createEarth = function(){
    var geometry = new THREE.SphereGeometry(3,128,128);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/earthmap2k.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/earthbump1k.jpg'),
        bumpScale : 0.05,
        specularMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/earthspec1k.jpg'),
        specular : new THREE.Color('grey'),
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createEarthCloud = function(){

};

Planets.createMoon = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/moonmap4k.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/moonbump4k.jpg'),
        bumpScale : 0.05,
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createMars = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var material = new THREE.MeshPhongMaterial({
        map : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/marsmap1k.jpg'),
        bumpMap : THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/marsbump1k.jpg'),
        bumpScale : 0.05,
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createJupiter = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var texture = THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/jupiter2_2k.jpg');
    var material = new THREE.MeshPhongMaterial({
        map : texture,
        bumpmap: texture,
        bumpScale : 0.05,
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

Planets.createSaturn = function(){
    var geometry = new THREE.SphereGeometry(3,32,32);
    var texture = THREE.ImageUtils.loadTexture(Planets.baseURL + 'images/saturnmap.jpg');
    var material = new THREE.MeshPhongMaterial({
        map : texture,
        bumpmap: texture,
        bumpScale : 0.05,
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};


