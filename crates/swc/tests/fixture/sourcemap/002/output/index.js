import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
export default function StaticPage(param) {
    var data = param.data;
    return /*#__PURE__*/ React.createElement("div", null, data.foo);
};
export function getStaticProps() {
    return _getStaticProps.apply(this, arguments);
}
function _getStaticProps() {
    _getStaticProps = _async_to_generator(function() {
        var _tmp;
        return _ts_generator(this, function(_state) {
            _tmp = {};
            return [
                2,
                (_tmp.props = {
                    data: {
                        foo: "bar"
                    }
                }, _tmp)
            ];
        });
    });
    return _getStaticProps.apply(this, arguments);
}
